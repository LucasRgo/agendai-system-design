export type EngineeringSection = {
  id: string;
  title: string;
  summary: string;
  bullets: string[];
  detailsPath: string;
};

export const engineeringSections: EngineeringSection[] = [
  {
    id: "architecture",
    title: "Arquitetura",
    summary: "Monólito modular em Django com processamento assíncrono para integrações de alta latência.",
    bullets: [
      "Apps por domínio: core, scheduling, agendamento, billing, whatsapp e assistant.",
      "Fluxos síncronos para UX imediata; fluxos assíncronos para resiliência.",
      "Evolução incremental sem replatforming prematuro.",
    ],
    detailsPath: "engineering/docs/architecture.md",
  },
  {
    id: "infra",
    title: "Infraestrutura",
    summary: "Stack containerizada via Docker Compose com separação de runtime web, dados e workers.",
    bullets: [
      "Web + Nginx + PostgreSQL + Redis + Celery Worker + Celery Beat + WAHA.",
      "Produção com TLS e serviços críticos não expostos publicamente.",
      "Trade-off assumido: elasticidade menor em troca de operação simples e custo baixo.",
    ],
    detailsPath: "engineering/docs/infra.md",
  },
  {
    id: "tenancy",
    title: "Multi-Tenant",
    summary: "Tenancy por linha (`tenant_id`) com enforcement em múltiplas camadas.",
    bullets: [
      "TenantMiddleware resolve contexto no request.",
      "Decorator, managers e filtros explícitos reduzem risco de vazamento.",
      "Opção escolhida para equilibrar segurança, custo e velocidade de entrega.",
    ],
    detailsPath: "engineering/docs/tenancy-strategy.md",
  },
  {
    id: "database",
    title: "Banco de Dados",
    summary: "Modelo relacional tenant-centric em PostgreSQL com constraints de negócio relevantes.",
    bullets: [
      "Entidades centrais de agenda, assinatura, WhatsApp e fidelidade.",
      "Unicidades condicionais por tenant para preservar invariantes.",
      "Crescimento tratado com índices, retenção e plano de particionamento futuro.",
    ],
    detailsPath: "engineering/docs/database-design.md",
  },
  {
    id: "payments",
    title: "Pagamentos",
    summary: "Stripe Checkout + Webhooks como fonte operacional de verdade para assinatura.",
    bullets: [
      "Convergência de estados financeiros orientada a eventos.",
      "Estados locais sincronizados: trialing, active, past_due, unpaid, canceled e outros.",
      "Reconcilição para reduzir inconsistências transitórias.",
    ],
    detailsPath: "engineering/docs/payments-flow.md",
  },
];

export const engineeringDiagrams = [
  {
    id: "context",
    title: "C4 Context",
    description: "Visão do sistema no ecossistema: usuários, plataforma agendAI e integrações externas.",
    imagePath: "engineering/diagrams/c4-context.png",
  },
  {
    id: "container",
    title: "C4 Container",
    description: "Componentes de execução: app web, workers, dados e borda de infraestrutura.",
    imagePath: "engineering/diagrams/c4-container.png",
  },
  {
    id: "erd",
    title: "ERD",
    description: "Modelo de dados multi-tenant com entidades de agenda, billing e conversação.",
    imagePath: "engineering/diagrams/erd.png",
  },
];
