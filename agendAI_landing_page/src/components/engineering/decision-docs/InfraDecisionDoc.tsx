const InfraDecisionDoc = () => {
    return (
        <div className="space-y-4 leading-7 [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h4]:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h5]:text-lg [&_h5]:font-semibold [&_p]:text-base [&_p]:text-muted-foreground [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:text-base [&_li]:text-muted-foreground [&_strong]:text-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.95em]">
            <h3>Infraestrutura e Deploy</h3>

            <h4>1. Decisão de infraestrutura</h4>
            <p>
                <strong>Decisão tomada:</strong> stack containerizada com Docker
                Compose, separando runtime web, dados, mensageria e workers.
            </p>

            <p>Objetivo:</p>
            <ul>
                <li>manter operação de produção simples e previsível;</li>
                <li>reduzir overhead de plataforma em contexto de time enxuto;</li>
                <li>
                    preservar caminho de evolução sem lock-in de arquitetura
                    complexa precoce.
                </li>
            </ul>

            <h4>2. Componentes</h4>
            <ul>
                <li>
                    <code>web</code>: aplicação Django (ASGI), endpoint
                    principal.
                </li>
                <li>
                    <code>nginx</code>: reverse proxy, assets estáticos e TLS em
                    produção.
                </li>
                <li>
                    <code>db</code>: PostgreSQL.
                </li>
                <li>
                    <code>redis</code>: broker e backend de resultado para
                    Celery.
                </li>
                <li>
                    <code>celery</code>: worker de tarefas assíncronas.
                </li>
                <li>
                    <code>celery_beat</code>: agendamento periódico.
                </li>
                <li>
                    <code>waha</code>: gateway de sessão e eventos do WhatsApp.
                </li>
            </ul>

            <h4>3. Perfis de execução</h4>
            <h5>Desenvolvimento</h5>
            <ul>
                <li>
                    <code>uvicorn --reload</code> no serviço web.
                </li>
                <li>
                    portas de banco/redis expostas para conveniência local.
                </li>
            </ul>

            <h5>Produção</h5>
            <ul>
                <li>Gunicorn com worker Uvicorn para ASGI.</li>
                <li>Nginx com TLS.</li>
                <li>banco e redis sem exposição pública direta.</li>
            </ul>

            <h4>4. Segurança operacional (sem segredos)</h4>
            <ul>
                <li>segredos via variáveis de ambiente.</li>
                <li>
                    redirecionamento para HTTPS e cookies seguros em produção.
                </li>
                <li>
                    origens confiáveis de CSRF explicitamente controladas.
                </li>
                <li>
                    headers de segurança habilitados no ambiente não-debug.
                </li>
            </ul>

            <h4>5. Disponibilidade e resiliência</h4>
            <ul>
                <li>tarefas assíncronas absorvem picos e latência externa.</li>
                <li>
                    separação de processos evita que processamento de integração
                    degrade UX web.
                </li>
                <li>
                    periodic tasks suportam autocorreção de sessão e rotinas
                    operacionais.
                </li>
            </ul>

            <h4>6. Trade-offs de infraestrutura</h4>
            <p>Risco aceito:</p>
            <ul>
                <li>
                    menor elasticidade automática comparado a plataformas
                    totalmente gerenciadas.
                </li>
            </ul>

            <p>Mitigação:</p>
            <ul>
                <li>baixo custo e simplicidade no estágio atual;</li>
                <li>
                    componentes desacoplados o suficiente para migração gradual
                    futura (DB gerenciado, fila gerenciada, orquestrador).
                </li>
            </ul>

            <h4>7. Caminho de evolução</h4>
            <ul>
                <li>
                    observabilidade com correlação por tenant e request/event id;
                </li>
                <li>
                    hardening de deploy com pipeline CI/CD e checks
                    automatizados;
                </li>
                <li>
                    estratégia de backup/restore e testes de desastre
                    formalizados;
                </li>
                <li>
                    possível migração progressiva para orquestração quando carga
                    justificar.
                </li>
            </ul>
        </div>
    );
};

export default InfraDecisionDoc;
