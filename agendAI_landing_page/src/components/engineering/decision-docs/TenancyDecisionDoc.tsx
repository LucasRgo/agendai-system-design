const TenancyDecisionDoc = () => {
    return (
        <div className="space-y-4 leading-7 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h5]:text-lg [&_h5]:font-semibold [&_p]:text-base [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-base [&_li]:text-muted-foreground [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.95em]">
            <h3>Estratégia Multi-Tenant</h3>

            <h4>1. Decisão de tenancy</h4>
            <p>
                <strong>Decisão tomada:</strong> multi-tenant por linha (shared
                database, shared schema, <code>tenant_id</code> em entidades de
                domínio).
            </p>

            <p>
                Essa é uma decisão pragmática e tecnicamente sólida para o
                estágio atual porque:
            </p>
            <ul>
                <li>minimiza custo de infraestrutura e operação;</li>
                <li>simplifica migração e evolução de schema;</li>
                <li>
                    acelera entrega com manutenção viável para dev solo.
                </li>
            </ul>

            <h4>2. Como o tenant é resolvido</h4>
            <ul>
                <li>
                    Para usuários autenticados, o tenant é derivado da relação
                    do usuário com <code>Tenant</code>.
                </li>
                <li>
                    <code>TenantMiddleware</code> injeta
                    <code> request.tenant</code> no ciclo HTTP.
                </li>
                <li>
                    O contexto também é propagado para execução corrente via
                    thread-local (<code>set_current_tenant</code>).
                </li>
            </ul>

            <h4>3. Camadas de enforcement</h4>
            <ul>
                <li>
                    <strong>Middleware</strong>: bloqueia acesso indevido quando
                    tenant não está resolvido.
                </li>
                <li>
                    <strong>Decorator (<code>require_tenant</code>)</strong>:
                    protege views que exigem contexto.
                </li>
                <li>
                    <strong>Managers/queries</strong>: filtros por tenant em
                    modelos críticos.
                </li>
                <li>
                    <strong>Filtro explícito por tenant</strong>: usado em pontos
                    de leitura/gravação sensíveis.
                </li>
            </ul>

            <h4>4. Isolamento e segurança de dados</h4>
            <p>Isolamento é lógico e sistemático:</p>
            <ul>
                <li>cada registro pertence a um tenant;</li>
                <li>
                    páginas públicas usam <code>tenant_slug</code> para escopo
                    explícito;
                </li>
                <li>
                    operações internas dependem de tenant autenticado.
                </li>
            </ul>

            <h4>5. Riscos aceitos</h4>
            <ul>
                <li>risco de vazamento acidental em query sem escopo tenant.</li>
            </ul>

            <h4>6. Mitigações adotadas</h4>
            <ul>
                <li>
                    enforcement em mais de uma camada (não apenas convenção);
                </li>
                <li>constraints por tenant onde aplicável;</li>
                <li>revisão contínua de trechos críticos de consulta;</li>
                <li>
                    contexto de tenant setado também para tarefas que processam
                    dados por organização.
                </li>
            </ul>

            <h4>7. Por que não banco por tenant agora</h4>
            <p>Banco/schema por tenant adiciona:</p>
            <ul>
                <li>maior custo operacional;</li>
                <li>maior complexidade de migração;</li>
                <li>overhead de observabilidade e automação.</li>
            </ul>

            <p>
                Para a fase atual, o ganho de isolamento físico não compensa a
                penalidade de execução para equipe enxuta.
            </p>
        </div>
    );
};

export default TenancyDecisionDoc;
