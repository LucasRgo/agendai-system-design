const ArchitectureDecisionDoc = () => {
    return (
        <div className="space-y-4 leading-7 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h5]:text-lg [&_h5]:font-semibold [&_p]:text-base [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-base [&_li]:text-muted-foreground [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.95em]">
            <h3>Arquitetura do AgendAI</h3>

            <h4>1. Decisão arquitetural central</h4>
            <p>
                <strong>Decisão tomada:</strong> monólito modular em Django com
                processamento assíncrono para integrações de alta latência.
            </p>

            <p>Essa abordagem equilibra:</p>
            <ul>
                <li>rapidez de evolução de produto;</li>
                <li>custo operacional baixo;</li>
                <li>
                    fronteiras de domínio suficientemente claras para
                    crescimento progressivo.
                </li>
            </ul>

            <h4>2. Fronteiras de domínio</h4>
            <p>
                O sistema está organizado em apps com responsabilidades
                definidas:
            </p>

            <ul>
                <li>
                    <code>core</code>: tenant, profissionais, horários de
                    trabalho, dashboards e onboarding.
                </li>
                <li>
                    <code>scheduling</code>: pacientes, serviços, agendamentos e
                    recorrência.
                </li>
                <li>
                    <code>agendamento</code>: site público de autoagendamento
                    personalizavel por tenant.
                </li>
                <li>
                    <code>billing</code>: assinatura, checkout e lifecycle
                    financeiro via Stripe.
                </li>
                <li>
                    <code>whatsapp</code>: configuração de sessão WAHA, webhook
                    e trilha de mensagens.
                </li>
                <li>
                    <code>assistant</code>: orquestração conversacional e uso
                    de ferramentas de agenda.
                </li>
            </ul>

            <h4>3. Fluxos síncronos</h4>
            <p>Fluxos HTTP síncronos que exigem resposta imediata:</p>
            <ul>
                <li>navegação de painel e operações CRUD internas;</li>
                <li>agendamento público por página do tenant;</li>
                <li>criação de checkout e redirecionamento para Stripe;</li>
                <li>consulta de estado operacional de sessão WhatsApp.</li>
            </ul>

            <h4>4. Fluxos assíncronos</h4>
            <p>Fluxos desacoplados para resiliência:</p>
            <ul>
                <li>ingestão e resposta de mensagens WhatsApp;</li>
                <li>processamento de IA com tool-calling;</li>
                <li>envios de lembrete e confirmação;</li>
                <li>
                    tarefas periódicas (health de sessão WAHA, checks de
                    assinatura).
                </li>
            </ul>

            <p>Tecnologias:</p>
            <ul>
                <li>Celery worker para execução;</li>
                <li>Celery Beat para agendamento;</li>
                <li>Redis como broker/result backend.</li>
            </ul>

            <h4>5. Estratégia de consistência</h4>
            <h5>5.1 Consistência transacional</h5>
            <ul>
                <li>PostgreSQL para dados de negócio.</li>
                <li>
                    Estados locais de assinatura e mensagens persistidos com
                    timestamps.
                </li>
            </ul>

            <h5>5.2 Consistência eventual</h5>
            <ul>
                <li>
                    Stripe webhooks atualizam status financeiro assíncrono.
                </li>
                <li>WAHA webhooks disparam pipeline de mensagens.</li>
                <li>
                    tarefas de reconciliação reduzem drift de estado
                    externo/interno.
                </li>
            </ul>

            <h4>6. Segurança de aplicação</h4>
            <ul>
                <li>
                    Middleware de tenant e assinatura em caminhos protegidos.
                </li>
                <li>Headers de segurança e HTTPS em produção.</li>
                <li>CSRF confiável com origens explícitas.</li>
                <li>Segredos em variáveis de ambiente.</li>
            </ul>

            <h4>7. Trade-offs assumidos</h4>
            <ul>
                <li>
                    menor isolamento físico de dados comparado a banco por
                    tenant;
                </li>
                <li>
                    menor elasticidade nativa comparado a arquitetura
                    distribuída desde o dia 1;
                </li>
                <li>
                    dependência de serviços externos para pagamentos, IA e
                    canal de mensagens.
                </li>
            </ul>

            <p>Mitigações:</p>
            <ul>
                <li>enforce de tenant em múltiplas camadas;</li>
                <li>design modular por domínio;</li>
                <li>trilha de auditoria de eventos e estados;</li>
                <li>
                    possibilidade de extração gradual de componentes críticos.
                </li>
            </ul>

            <h4>8. Caminho de evolução</h4>
            <ul>
                <li>
                    observabilidade mais estruturada (logs correlacionados por
                    tenant/evento);
                </li>
                <li>políticas de retenção/arquivamento de mensagens;</li>
                <li>hardening de idempotência por evento externo;</li>
                <li>
                    eventual separação de workloads intensivos em serviços
                    dedicados quando o volume justificar.
                </li>
            </ul>
        </div>
    );
};

export default ArchitectureDecisionDoc;
