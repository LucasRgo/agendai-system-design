# Estratégia Multi-Tenant

## 1. Decisão de tenancy
**Decisão tomada:** multi-tenant por linha (shared database, shared schema, `tenant_id` em entidades de domínio).

Essa é uma decisão pragmática e tecnicamente sólida para o estágio atual porque:
- minimiza custo de infraestrutura e operação;
- simplifica migração e evolução de schema;
- acelera entrega com manutenção viável para dev solo.

## 2. Como o tenant é resolvido
- Para usuários autenticados, o tenant é derivado da relação do usuário com `Tenant`.
- `TenantMiddleware` injeta `request.tenant` no ciclo HTTP.
- O contexto também é propagado para execução corrente via thread-local (`set_current_tenant`).

## 3. Camadas de enforcement
- **Middleware**: bloqueia acesso indevido quando tenant não está resolvido.
- **Decorator (`require_tenant`)**: protege views que exigem contexto.
- **Managers/queries**: filtros por tenant em modelos críticos.
- **Filtro explícito por tenant**: usado em pontos de leitura/gravação sensíveis.

## 4. Isolamento e segurança de dados
Isolamento é lógico e sistemático:
- cada registro pertence a um tenant;
- páginas públicas usam `tenant_slug` para escopo explícito;
- operações internas dependem de tenant autenticado.

## 5. Riscos aceitos
- risco de vazamento acidental em query sem escopo tenant.

## 6. Mitigações adotadas
- enforcement em mais de uma camada (não apenas convenção);
- constraints por tenant onde aplicável;
- revisão contínua de trechos críticos de consulta;
- contexto de tenant setado também para tarefas que processam dados por organização.

## 7. Por que não banco por tenant agora
Banco/schema por tenant adiciona:
- maior custo operacional;
- maior complexidade de migração;
- overhead de observabilidade e automação.

Para a fase atual, o ganho de isolamento físico não compensa a penalidade de execução para equipe enxuta.
