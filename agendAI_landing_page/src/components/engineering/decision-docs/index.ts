import type { ComponentType } from "react";
import ArchitectureDecisionDoc from "./ArchitectureDecisionDoc";
import DatabaseDecisionDoc from "./DatabaseDecisionDoc";
import InfraDecisionDoc from "./InfraDecisionDoc";
import PaymentsDecisionDoc from "./PaymentsDecisionDoc";
import TenancyDecisionDoc from "./TenancyDecisionDoc";

export const decisionDocComponents: Record<string, ComponentType> = {
    architecture: ArchitectureDecisionDoc,
    infra: InfraDecisionDoc,
    tenancy: TenancyDecisionDoc,
    database: DatabaseDecisionDoc,
    payments: PaymentsDecisionDoc,
};
