/** @typedef {typeof __propDef.props}  ChipProps */
/** @typedef {typeof __propDef.events}  ChipEvents */
/** @typedef {typeof __propDef.slots}  ChipSlots */
export default class Chip extends SvelteComponentTyped<{
    [x: string]: any;
    variant?: string;
    color?: string;
    show?: boolean;
    dismissible?: boolean;
    animation?: {
        y: number;
        duration: number;
    };
    id?: any;
}, {
    closed: CustomEvent<any>;
} & {
    [evt: string]: CustomEvent<any>;
}, {
    icon: {};
    default: {};
}> {
}
export type ChipProps = typeof __propDef.props;
export type ChipEvents = typeof __propDef.events;
export type ChipSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        variant?: string;
        color?: string;
        show?: boolean;
        dismissible?: boolean;
        animation?: {
            y: number;
            duration: number;
        };
        id?: any;
    };
    events: {
        closed: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        icon: {};
        default: {};
    };
};
export {};
