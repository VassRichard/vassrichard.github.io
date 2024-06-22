import { FC } from "react";
import { RoleConfigType } from "../../../utils/types";
import { SomethingWrapper } from "../SomethingArea.css";

export type RoleCardType = {
    role: RoleConfigType;
}

export const RoleCard: FC<RoleCardType> = ({ role }) => {

    return (
        <SomethingWrapper >
            <p>{role.title}</p>
        </SomethingWrapper>
    )
};
