# Arquitetura do AgendAI

## 1. Decisão arquitetural central
**Decisão tomada:** monólito modular em Django com processamento assíncrono para integrações de alta latência.

Essa abordagem equilibra:
- rapidez de evolução de produto;
- custo operacional baixo;
- fronteiras de domínio suficientemente claras para crescimento progressivo.

## 2. Fronteiras de domínio
O sistema está organizado em apps com responsabilidades definidas:

- `core`: tenant, profissionais, horários de trabalho, dashboards e onboarding.
- `scheduling`: pacientes, serviços, agendamentos e recorrência.
- `agendamento`: site público de autoagendamento personalizavel por tenant.
- `billing`: assinatura, checkout e lifecycle financeiro via Stripe.
- `whatsapp`: configuração de sessão WAHA, webhook e trilha de mensagens.
- `assistant`: orquestração conversacional e uso de ferramentas de agenda.

## 3. Fluxos síncronos
Fluxos HTTP síncronos que exigem resposta imediata:
- navegação de painel e operações CRUD internas;
- agendamento público por página do tenant;
- criação de checkout e redirecionamento para Stripe;
- consulta de estado operacional de sessão WhatsApp.

## 4. Fluxos assíncronos
Fluxos desacoplados para resiliência:
- ingestão e resposta de mensagens WhatsApp;
- processamento de IA com tool-calling;
- envios de lembrete e confirmação;
- tarefas periódicas (health de sessão WAHA, checks de assinatura).

Tecnologias:
- Celery worker para execução;
- Celery Beat para agendamento;
- Redis como broker/result backend.

## 5. Estratégia de consistência
### 5.1 Consistência transacional
- PostgreSQL para dados de negócio.
- Estados locais de assinatura e mensagens persistidos com timestamps.

### 5.2 Consistência eventual
- Stripe webhooks atualizam status financeiro assíncrono.
- WAHA webhooks disparam pipeline de mensagens.
- tarefas de reconciliação reduzem drift de estado externo/interno.

## 6. Segurança de aplicação
- Middleware de tenant e assinatura em caminhos protegidos.
- Headers de segurança e HTTPS em produção.
- CSRF confiável com origens explícitas.
- Segredos em variáveis de ambiente.

## 7. Trade-offs assumidos
- menor isolamento físico de dados comparado a banco por tenant;
- menor elasticidade nativa comparado a arquitetura distribuída desde o dia 1;
- dependência de serviços externos para pagamentos, IA e canal de mensagens.

Mitigações:
- enforce de tenant em múltiplas camadas;
- design modular por domínio;
- trilha de auditoria de eventos e estados;
- possibilidade de extração gradual de componentes críticos.

## 8. Caminho de evolução
- observabilidade mais estruturada (logs correlacionados por tenant/evento);
- políticas de retenção/arquivamento de mensagens;
- hardening de idempotência por evento externo;
- eventual separação de workloads intensivos em serviços dedicados quando o volume justificar.
