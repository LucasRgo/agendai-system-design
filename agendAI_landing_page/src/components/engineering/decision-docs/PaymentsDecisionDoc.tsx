const PaymentsDecisionDoc = () => {
    return (
        <div className="space-y-4 leading-7 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h5]:text-lg [&_h5]:font-semibold [&_p]:text-base [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-base [&_li]:text-muted-foreground [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.95em]">
            <h3>Fluxo de Pagamentos (Stripe + Webhooks)</h3>

            <h4>1. Decisão de billing</h4>
            <p>
                <strong>Decisão tomada:</strong> Stripe como plataforma de
                cobrança e webhooks como mecanismo principal de convergência de
                estado financeiro.
            </p>

            <p>Razão técnica:</p>
            <ul>
                <li>reduz escopo de compliance e risco PCI;</li>
                <li>oferece eventos confiáveis para lifecycle de assinatura;</li>
                <li>simplifica expansão de cobrança recorrente.</li>
            </ul>

            <h4>2. Jornada de assinatura</h4>
            <ol>
                <li>Tenant é criado com trial inicial.</li>
                <li>Usuário acessa upgrade e inicia checkout.</li>
                <li>
                    Sistema cria <code>Checkout Session</code> Stripe com
                    metadata de tenant/usuário.
                </li>
                <li>
                    <code>stripe_session_id</code> fica persistido localmente.
                </li>
                <li>Stripe emite eventos para webhook.</li>
                <li>
                    Sistema atualiza <code>Subscription</code> local conforme
                    evento.
                </li>
            </ol>

            <h4>3. Eventos processados</h4>
            <ul>
                <li>
                    <code>checkout.session.completed</code>: vincula subscription
                    real e ativa assinatura.
                </li>
                <li>
                    <code>invoice.paid</code>: marca assinatura ativa.
                </li>
                <li>
                    <code>invoice.payment_failed</code>: marca
                    <code> past_due</code> e dispara notificação.
                </li>
                <li>
                    <code>invoice.finalization_failed</code>: marca
                    <code> unpaid</code>.
                </li>
                <li>
                    <code>customer.subscription.updated</code>: sincroniza
                    status.
                </li>
                <li>
                    <code>customer.subscription.deleted</code>: marca cancelada.
                </li>
            </ul>

            <h4>4. Estados internos</h4>
            <p>Estados usados em <code>Subscription</code>:</p>
            <ul>
                <li>
                    <code>trialing</code>
                </li>
                <li>
                    <code>active</code>
                </li>
                <li>
                    <code>incomplete</code>
                </li>
                <li>
                    <code>past_due</code>
                </li>
                <li>
                    <code>unpaid</code>
                </li>
                <li>
                    <code>canceled</code>
                </li>
                <li>
                    <code>incomplete_expired</code>
                </li>
            </ul>

            <h4>5. Guardrails operacionais</h4>
            <ul>
                <li>
                    Middleware de assinatura restringe acesso em estados não
                    elegíveis.
                </li>
                <li>
                    Em cenários de inadimplência crítica, integração WhatsApp
                    pode ser interrompida para evitar custo operacional sem
                    receita.
                </li>
                <li>
                    Endpoint de consulta/reconciliação ajuda em cenários de
                    inconsistência transitória.
                </li>
            </ul>

            <h4>6. Riscos e mitigação</h4>
            <p>Risco aceito:</p>
            <ul>
                <li>
                    assincronismo natural entre ação do usuário e atualização
                    final do estado local.
                </li>
            </ul>

            <p>Mitigação:</p>
            <ul>
                <li>webhooks como fonte de verdade operacional;</li>
                <li>persistência de identificadores Stripe locais;</li>
                <li>
                    reconciliação sob demanda e tratamento de falhas de
                    processamento.
                </li>
            </ul>

            <h4>7. Decisão de engenharia defendida</h4>
            <p>
                A arquitetura é orientada a eventos por design: pagamento não
                depende de callback de frontend para consistência de estado.
                Essa escolha aumenta robustez financeira e reduz fragilidade do
                fluxo comercial.
            </p>
        </div>
    );
};

export default PaymentsDecisionDoc;
