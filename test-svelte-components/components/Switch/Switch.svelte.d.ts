/** @typedef {typeof __propDef.props}  SwitchProps */
/** @typedef {typeof __propDef.events}  SwitchEvents */
/** @typedef {typeof __propDef.slots}  SwitchSlots */
export default class Switch extends SvelteComponentTyped<{
    [x: string]: any;
    color?: string;
    id?: any;
    ripple?: any;
    label?: string;
    value?: string;
    trueValue?: boolean;
    falseValue?: boolean;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SwitchProps = typeof __propDef.props;
export type SwitchEvents = typeof __propDef.events;
export type SwitchSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        color?: string;
        id?: any;
        ripple?: any;
        label?: string;
        value?: string;
        trueValue?: boolean;
        falseValue?: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
