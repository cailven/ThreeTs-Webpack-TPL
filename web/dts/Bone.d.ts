/// <reference path="./jquery.d.ts" />
/**
 * Created by zhangcai on 2016/7/6.
 */

declare var scene;
declare var camera;

declare var renderer;

declare  module $$ {
    export function init();

    export var global;
    export var Controls;

    export var Component ;


    export var worldActions;

    export function animate();
}

declare module Bone {
    export function extend(a: any, b: any, c: any);

    export class Bone {
        constructor(attr?, opts?);

        get(name: string): any;

        set(name: string, val: any): void;
        set(obj: any): void;

        save(attr?, opts?): void;

        destroy(): void;

        bind(ev: string, f: Function, ctx?: any): void;

        toJSON(): any;

    }
    export class Collection<T> {
        constructor(models?, opts?);

        bind(ev: string, f: Function, ctx?: any): void;

        length: number;

        create(attrs, opts?): any;

        each(f: (elem: T) => void): void;

        fetch(opts?: any): void;

        last(): T;
        last(n: number): T[];

        filter(f: (elem: T) => boolean): T[];

        without(...values: T[]): T[];
    }
    export class View {
        constructor(options?);

        $(selector: string): JQuery;

        el: HTMLElement;
        $el: JQuery;
        model: Bone;
        data: any;

        remove(): void;

        delegateEvents: any;

        make(tagName: string, attrs?, opts?): View;

        setElement(element: HTMLElement, delegate?: boolean): void;
        setElement(element: JQuery, delegate?: boolean): void;

        tagName: string;
        events: any;

        render();

        template: any;

        static extend: any;
    }
    export class Events {
        on(eventName: string, callback?: Function, context?: any): any;
        on(eventMap: any): any;

        off(eventName?: string, callback?: Function, context?: any): any;

        trigger(eventName: string, ...args: any[]): any;

        bind(eventName: string, callback: Function, context?: any): any;

        unbind(eventName?: string, callback?: Function, context?: any): any;

        once(events: string, callback: Function, context?: any): any;

        listenTo(object: any, events: string, callback: Function): any;

        listenToOnce(object: any, events: string, callback: Function): any;

        stopListening(object?: any, events?: string, callback?: Function): any;

    }

    export class Router {


    }
}

declare function require(any);
declare module require {
    function ensure(...paras);

    export class require {
        ensure();
    }

}


declare function ga(...paras);
// declare var lib, images, ss;
