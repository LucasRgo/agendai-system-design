const DatabaseDecisionDoc = () => {
    return (
        <div className="space-y-4 leading-7 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h5]:text-lg [&_h5]:font-semibold [&_p]:text-base [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-base [&_li]:text-muted-foreground [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.95em]">
            <h3>Database Design</h3>

            <h4>1. Decisão de modelagem</h4>
            <p>
                <strong>Decisão tomada:</strong> modelo relacional tenant-centric
                em PostgreSQL, com entidades de negócio separadas por contexto e
                relacionamento explícito por <code>tenant_id</code>.
            </p>

            <p>Isso favorece:</p>
            <ul>
                <li>integridade transacional;</li>
                <li>consultas previsíveis;</li>
                <li>manutenção simples de esquema para operação solo.</li>
            </ul>

            <h4>2. Entidades centrais</h4>

            <h5>Núcleo organizacional</h5>
            <ul>
                <li>
                    <code>Tenant</code>: unidade principal de isolamento lógico.
                </li>
                <li>
                    <code>WorkingDay</code>: regra semanal de expediente por
                    tenant.
                </li>
                <li>
                    <code>Professional</code>: profissionais vinculados ao
                    tenant.
                </li>
            </ul>

            <h5>Agenda</h5>
            <ul>
                <li>
                    <code>Patient</code>: cliente/paciente do tenant.
                </li>
                <li>
                    <code>Service</code>: catálogo de serviços por tenant.
                </li>
                <li>
                    <code>Appointment</code>: agendamento com data/hora/duração
                    e vínculos.
                </li>
                <li>
                    <code>RecurringRule</code>: metadados de recorrência.
                </li>
            </ul>

            <h5>Receita e retenção</h5>
            <ul>
                <li>
                    <code>LoyaltyProgram</code>: configuração de fidelidade por
                    tenant.
                </li>
                <li>
                    <code>LoyaltyCard</code>: pontos por paciente no tenant.
                </li>
            </ul>

            <h5>Billing</h5>
            <ul>
                <li>
                    <code>Customer</code>: mapeamento local para customer
                    Stripe.
                </li>
                <li>
                    <code>Subscription</code>: ciclo e status de assinatura.
                </li>
            </ul>

            <h5>WhatsApp e IA</h5>
            <ul>
                <li>
                    <code>WhatsAppConfig</code>: sessão WhatsApp por tenant.
                </li>
                <li>
                    <code>WhatsAppMessage</code>: log de mensagens
                    inbound/outbound + processamento.
                </li>
                <li>
                    <code>ConversationSession</code>: sessão conversacional ativa
                    por telefone/tenant.
                </li>
            </ul>

            <h4>3. Relacionamentos relevantes</h4>
            <ul>
                <li>
                    Um <code>Tenant</code> possui vários
                    <code> Professional</code>, <code>Patient</code>,
                    <code> Service</code>, <code>Appointment</code> e
                    <code> Subscription</code>.
                </li>
                <li>
                    <code>Tenant</code> possui 1:1 com
                    <code> WhatsAppConfig</code> e <code>LoyaltyProgram</code>.
                </li>
                <li>
                    <code>Subscription</code> referencia <code>Customer</code> e
                    <code> Tenant</code>.
                </li>
                <li>
                    <code>WhatsAppMessage</code> referencia <code>Tenant</code>,
                    <code> WhatsAppConfig</code>, <code>Patient</code> e
                    opcionalmente <code>ConversationSession</code>.
                </li>
                <li>
                    <code>ConversationSession</code> referencia
                    <code> Tenant</code> e opcionalmente <code>Patient</code>.
                </li>
            </ul>

            <h4>4. Constraints e invariantes</h4>
            <ul>
                <li>
                    <code>Tenant.slug</code> único.
                </li>
                <li>
                    <code>Tenant.phone_number</code> único.
                </li>
                <li>
                    <code>WorkingDay</code>: <code>unique_together (tenant, day_of_week)</code>.
                </li>
                <li>
                    <code>Service</code>: <code>unique_together (tenant, name)</code>.
                </li>
                <li>
                    <code>Patient</code>: unicidade condicional de
                    <code> (tenant, phone)</code> para telefone não vazio.
                </li>
                <li>
                    <code>WhatsAppConfig.session_name</code> único.
                </li>
                <li>
                    <code>ConversationSession</code>: unicidade condicional de
                    sessão ativa por <code>(tenant, phone_number)</code>.
                </li>
            </ul>

            <p>
                Essas restrições protegem invariantes de negócio sem depender
                apenas de regra de aplicação.
            </p>

            <h4>5. Estratégia de crescimento de dados</h4>
            <p>Riscos de volume:</p>
            <ul>
                <li>
                    <code>WhatsAppMessage</code> tende a crescer rapidamente;
                </li>
                <li>
                    <code>Appointment</code> pode crescer com histórico de longo
                    prazo.
                </li>
            </ul>

            <p>Mitigações planejáveis:</p>
            <ul>
                <li>
                    índices em chaves de consulta frequente (tenant, data,
                    status, created_at);
                </li>
                <li>retenção/arquivamento por janela temporal;</li>
                <li>
                    particionamento futuro para tabelas de alto volume, se
                    necessário.
                </li>
            </ul>

            <h4>6. Trade-offs assumidos</h4>
            <ul>
                <li>sem isolamento físico por tenant no banco;</li>
                <li>
                    necessidade de disciplina de escopo tenant em queries
                    customizadas.
                </li>
            </ul>

            <p>Mitigação:</p>
            <ul>
                <li>
                    middleware + managers + filtros explícitos + constraints de
                    integridade.
                </li>
            </ul>
        </div>
    );
};

export default DatabaseDecisionDoc;
