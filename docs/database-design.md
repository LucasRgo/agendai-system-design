# Database Design

## 1. Decisão de modelagem
**Decisão tomada:** modelo relacional tenant-centric em PostgreSQL, com entidades de negócio separadas por contexto e relacionamento explícito por `tenant_id`.

Isso favorece:
- integridade transacional;
- consultas previsíveis;
- manutenção simples de esquema para operação solo.

## 2. Entidades centrais

### Núcleo organizacional
- `Tenant`: unidade principal de isolamento lógico.
- `WorkingDay`: regra semanal de expediente por tenant.
- `Professional`: profissionais vinculados ao tenant.

### Agenda
- `Patient`: cliente/paciente do tenant.
- `Service`: catálogo de serviços por tenant.
- `Appointment`: agendamento com data/hora/duração e vínculos.
- `RecurringRule`: metadados de recorrência.

### Receita e retenção
- `LoyaltyProgram`: configuração de fidelidade por tenant.
- `LoyaltyCard`: pontos por paciente no tenant.

### Billing
- `Customer`: mapeamento local para customer Stripe.
- `Subscription`: ciclo e status de assinatura.

### WhatsApp e IA
- `WhatsAppConfig`: sessão WhatsApp por tenant.
- `WhatsAppMessage`: log de mensagens inbound/outbound + processamento.
- `ConversationSession`: sessão conversacional ativa por telefone/tenant.

## 3. Relacionamentos relevantes
- Um `Tenant` possui vários `Professional`, `Patient`, `Service`, `Appointment` e `Subscription`.
- `Tenant` possui 1:1 com `WhatsAppConfig` e `LoyaltyProgram`.
- `Subscription` referencia `Customer` e `Tenant`.
- `WhatsAppMessage` referencia `Tenant`, `WhatsAppConfig`, `Patient` e opcionalmente `ConversationSession`.
- `ConversationSession` referencia `Tenant` e opcionalmente `Patient`.

## 4. Constraints e invariantes
- `Tenant.slug` único.
- `Tenant.phone_number` único.
- `WorkingDay`: `unique_together (tenant, day_of_week)`.
- `Service`: `unique_together (tenant, name)`.
- `Patient`: unicidade condicional de `(tenant, phone)` para telefone não vazio.
- `WhatsAppConfig.session_name` único.
- `ConversationSession`: unicidade condicional de sessão ativa por `(tenant, phone_number)`.

Essas restrições protegem invariantes de negócio sem depender apenas de regra de aplicação.

## 5. Estratégia de crescimento de dados
Riscos de volume:
- `WhatsAppMessage` tende a crescer rapidamente;
- `Appointment` pode crescer com histórico de longo prazo.

Mitigações planejáveis:
- índices em chaves de consulta frequente (tenant, data, status, created_at);
- retenção/arquivamento por janela temporal;
- particionamento futuro para tabelas de alto volume, se necessário.

## 6. Trade-offs assumidos
- sem isolamento físico por tenant no banco;
- necessidade de disciplina de escopo tenant em queries customizadas.

Mitigação:
- middleware + managers + filtros explícitos + constraints de integridade.
