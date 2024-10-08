/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface TaskCreate {
    }
    interface TaskDelete {
        "taskId": number;
    }
    interface TaskHeader {
    }
    interface TaskList {
    }
    interface TaskUpdate {
        "taskDescription": string;
        "taskId": number;
        "taskStatus": string;
        "taskTitle": string;
    }
}
export interface TaskCreateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTaskCreateElement;
}
export interface TaskDeleteCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTaskDeleteElement;
}
export interface TaskUpdateCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLTaskUpdateElement;
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLTaskCreateElementEventMap {
        "taskCreated": void;
    }
    interface HTMLTaskCreateElement extends Components.TaskCreate, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTaskCreateElementEventMap>(type: K, listener: (this: HTMLTaskCreateElement, ev: TaskCreateCustomEvent<HTMLTaskCreateElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTaskCreateElementEventMap>(type: K, listener: (this: HTMLTaskCreateElement, ev: TaskCreateCustomEvent<HTMLTaskCreateElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTaskCreateElement: {
        prototype: HTMLTaskCreateElement;
        new (): HTMLTaskCreateElement;
    };
    interface HTMLTaskDeleteElementEventMap {
        "taskDeleted": void;
    }
    interface HTMLTaskDeleteElement extends Components.TaskDelete, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTaskDeleteElementEventMap>(type: K, listener: (this: HTMLTaskDeleteElement, ev: TaskDeleteCustomEvent<HTMLTaskDeleteElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTaskDeleteElementEventMap>(type: K, listener: (this: HTMLTaskDeleteElement, ev: TaskDeleteCustomEvent<HTMLTaskDeleteElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTaskDeleteElement: {
        prototype: HTMLTaskDeleteElement;
        new (): HTMLTaskDeleteElement;
    };
    interface HTMLTaskHeaderElement extends Components.TaskHeader, HTMLStencilElement {
    }
    var HTMLTaskHeaderElement: {
        prototype: HTMLTaskHeaderElement;
        new (): HTMLTaskHeaderElement;
    };
    interface HTMLTaskListElement extends Components.TaskList, HTMLStencilElement {
    }
    var HTMLTaskListElement: {
        prototype: HTMLTaskListElement;
        new (): HTMLTaskListElement;
    };
    interface HTMLTaskUpdateElementEventMap {
        "taskUpdated": any;
    }
    interface HTMLTaskUpdateElement extends Components.TaskUpdate, HTMLStencilElement {
        addEventListener<K extends keyof HTMLTaskUpdateElementEventMap>(type: K, listener: (this: HTMLTaskUpdateElement, ev: TaskUpdateCustomEvent<HTMLTaskUpdateElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLTaskUpdateElementEventMap>(type: K, listener: (this: HTMLTaskUpdateElement, ev: TaskUpdateCustomEvent<HTMLTaskUpdateElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLTaskUpdateElement: {
        prototype: HTMLTaskUpdateElement;
        new (): HTMLTaskUpdateElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "task-create": HTMLTaskCreateElement;
        "task-delete": HTMLTaskDeleteElement;
        "task-header": HTMLTaskHeaderElement;
        "task-list": HTMLTaskListElement;
        "task-update": HTMLTaskUpdateElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface TaskCreate {
        "onTaskCreated"?: (event: TaskCreateCustomEvent<void>) => void;
    }
    interface TaskDelete {
        "onTaskDeleted"?: (event: TaskDeleteCustomEvent<void>) => void;
        "taskId"?: number;
    }
    interface TaskHeader {
    }
    interface TaskList {
    }
    interface TaskUpdate {
        "onTaskUpdated"?: (event: TaskUpdateCustomEvent<any>) => void;
        "taskDescription"?: string;
        "taskId"?: number;
        "taskStatus"?: string;
        "taskTitle"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "task-create": TaskCreate;
        "task-delete": TaskDelete;
        "task-header": TaskHeader;
        "task-list": TaskList;
        "task-update": TaskUpdate;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "task-create": LocalJSX.TaskCreate & JSXBase.HTMLAttributes<HTMLTaskCreateElement>;
            "task-delete": LocalJSX.TaskDelete & JSXBase.HTMLAttributes<HTMLTaskDeleteElement>;
            "task-header": LocalJSX.TaskHeader & JSXBase.HTMLAttributes<HTMLTaskHeaderElement>;
            "task-list": LocalJSX.TaskList & JSXBase.HTMLAttributes<HTMLTaskListElement>;
            "task-update": LocalJSX.TaskUpdate & JSXBase.HTMLAttributes<HTMLTaskUpdateElement>;
        }
    }
}
