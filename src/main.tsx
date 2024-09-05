import { render } from "preact";
import "./index.css";

import { Provider } from "react-redux";
import { Ui } from "./ui";
import { dosSlice, RenderAspect } from "./store/dos";
import { initEmulators } from "./store/dos";
// eslint-disable-next-line
import { uiSlice } from "./store/ui";
import { i18nSlice } from "./i18n";
import { getCache } from "./host/lcache";
import { loadBundleFromConfg, loadBundleFromUrl } from "./player-api-load";

import { DosOptions, DosProps, DosFn, ImageRendering, RenderBackend } from "./public/types";
import { browserSetFullScreen } from "./host/fullscreen";
import { NonSerializableStore, State, Store, getNonSerializableStore,
    makeNonSerializableStore, makeStore, postJsDosEvent } from "./store";
import { authSlice } from "./store/auth";
import { apiSave } from "./player-api";

export const Dos: DosFn = (element: HTMLDivElement,
    options: Partial<DosOptions> = {}): DosProps => {
    const nonSerializableStore = makeNonSerializableStore(options);
    const store = makeStore(nonSerializableStore, options);


    if (store.getState().auth.account?.email === "dz.caiiiycuk@gmail.com") {
        store.dispatch(dosSlice.actions.setSockdriveWrite(false));
    }

    setupRootElement(element, nonSerializableStore, store);

    let pollStep = "none";
    function pollEvents() {
        (async () => {
            const state = store.getState();
            const step = state.dos.step;

            if (step === pollStep) {
                return;
            }
            pollStep = step;

            switch (state.dos.step) {
                case "emu-ready": {
                    const cachedEmail = state.auth.account?.email;
                    nonSerializableStore.cache = await getCache(cachedEmail ?? "guest");

                    if (nonSerializableStore.options.url) {
                        try {
                            await loadBundleFromUrl(nonSerializableStore.options.url, store);
                        } catch (e: any) {
                            store.dispatch(dosSlice.actions.bndError(e.message));
                        }
                    } else if (nonSerializableStore.options.dosboxConf) {
                        loadBundleFromConfg({
                            dosboxConf: nonSerializableStore.options.dosboxConf,
                            jsdosConf: {
                                version: "8",
                            },
                        }, nonSerializableStore.options.initFs ?? null, store);
                    } else {
                        store.dispatch(uiSlice.actions.windowSelect());
                    }

                    postJsDosEvent(nonSerializableStore, "emu-ready");
                } break;
            };
        })().catch(console.error);
    }
    store.subscribe(pollEvents);

    initEmulators(store, options.pathPrefix ?? "https://v8.js-dos.com/latest/emulators/");

    function setTheme(theme: DosOptions["theme"]) {
        store.dispatch(uiSlice.actions.theme(theme));
    }

    function setLang(lang: DosOptions["lang"]) {
        store.dispatch(i18nSlice.actions.setLang(lang));
    }

    function setBackend(backend: DosOptions["backend"]) {
        store.dispatch(dosSlice.actions.dosBackend(backend));
    }

    function setBackendLocked(locked: boolean) {
        store.dispatch(dosSlice.actions.dosBackendLocked(locked));
    }

    function setWorkerThread(workerThread: DosOptions["workerThread"]) {
        store.dispatch(dosSlice.actions.dosWorker(workerThread));
    }

    function setMouseCapture(capture: DosOptions["mouseCapture"]) {
        store.dispatch(dosSlice.actions.mouseCapture(capture));
    }

    function setServer(server: DosOptions["server"]) {
        store.dispatch(dosSlice.actions.setServer(server));
    }

    function setRoom(room: DosOptions["room"]) {
        store.dispatch(dosSlice.actions.setRoom(room));
    }

    function setFrame(frame: "network") {
        store.dispatch(uiSlice.actions.frameNetwork());
    }

    function setBackground(background: string) {
        store.dispatch(uiSlice.actions.background(background));
    }

    function setFullScreen(fullScreen: boolean) {
        browserSetFullScreen(fullScreen, store);
    }

    function setAutoStart(autoStart: boolean) {
        store.dispatch(uiSlice.actions.autoStart(autoStart));
    }

    function setKiosk(kiosk: boolean) {
        store.dispatch(uiSlice.actions.kiosk(kiosk));
    }

    function setImageRendering(imageRendering: ImageRendering) {
        store.dispatch(dosSlice.actions.imageRendering(imageRendering));
    }

    function setRenderBackend(backend: RenderBackend) {
        store.dispatch(dosSlice.actions.renderBackend(backend));
    }

    function setRenderAspect(aspect: RenderAspect) {
        store.dispatch(dosSlice.actions.renderAspect(aspect));
    }

    function setNoNetworking(networking: boolean) {
        store.dispatch(uiSlice.actions.noNetworking(networking));
    }

    function setNoCloud(cloud: boolean) {
        store.dispatch(uiSlice.actions.noCloud(cloud));
    }

    function setPaused(paused: boolean) {
        store.dispatch(dosSlice.actions.paused(paused));
    }

    function setScaleControls(scale: number) {
        store.dispatch(dosSlice.actions.scaleControls(scale));
    }

    function setMouseSensitivity(sensitivity: number) {
        store.dispatch(dosSlice.actions.mouseSensitivity(sensitivity));
    }

    function setNoCursor(noCursor: boolean) {
        store.dispatch(dosSlice.actions.noCursor(noCursor));
    }

    function setSoftKeyboardLayout(layout: string[]) {
        store.dispatch(dosSlice.actions.softKeyboardLayout(layout));
    }

    function setSoftKeyboardSymbols(symbols: {[key: string]: string}[]) {
        store.dispatch(dosSlice.actions.softKeyboardSymbols(symbols));
    }

    function setVolume(volume: number) {
        store.dispatch(dosSlice.actions.volume(volume));
    }

    if (options.theme) {
        setTheme(options.theme);
    }

    if (options.lang) {
        setLang(options.lang);
    }

    if (options.backend) {
        setBackend(options.backend);
    }

    if (options.backendLocked) {
        setBackendLocked(options.backendLocked);
    }

    if (options.workerThread !== undefined) {
        setWorkerThread(options.workerThread);
    }

    if (options.mouseCapture !== undefined) {
        setMouseCapture(options.mouseCapture);
    }

    if (options.server) {
        setServer(options.server);
    }

    if (options.room) {
        setRoom(options.room);
    }

    if (options.background) {
        setBackground(options.background);
    }

    if (options.fullScreen !== undefined) {
        setFullScreen(options.fullScreen);
    }

    if (options.loginUrl !== undefined) {
        store.dispatch(authSlice.actions.setLoginUrl(options.loginUrl));
    }

    if (options.autoStart !== undefined) {
        setAutoStart(options.autoStart);
    }

    if (options.kiosk !== undefined) {
        setKiosk(options.kiosk);
    }

    if (options.imageRendering !== undefined) {
        setImageRendering(options.imageRendering);
    }

    if (options.renderBackend !== undefined) {
        setRenderBackend(options.renderBackend);
    }

    if (options.renderAspect !== undefined) {
        setRenderAspect(options.renderAspect);
    }

    if (options.noNetworking !== undefined) {
        setNoNetworking(options.noNetworking);
    }

    if (options.noCloud !== undefined) {
        setNoCloud(options.noCloud);
    }

    if (options.scaleControls !== undefined) {
        setScaleControls(options.scaleControls);
    }

    if (options.mouseSensitivity !== undefined) {
        setMouseSensitivity(options.mouseSensitivity);
    }

    if (options.noCursor !== undefined) {
        setNoCursor(options.noCursor);
    }

    if (options.softKeyboardLayout !== undefined) {
        setSoftKeyboardLayout(options.softKeyboardLayout);
    }

    if (options.softKeyboardSymbols !== undefined) {
        setSoftKeyboardSymbols(options.softKeyboardSymbols);
    }

    if (options.volume !== undefined) {
        setVolume(options.volume);
    }

    render(
        <Provider store={store}>
            {<Ui /> as any}
        </Provider>,
        element,
    );

    return {
        setTheme,
        setLang,
        setBackend,
        setBackendLocked,
        setWorkerThread,
        setMouseCapture,
        setServer,
        setRoom,
        setFrame,
        setBackground,
        setFullScreen,
        setAutoStart,
        setKiosk,
        setImageRendering,
        setRenderBackend,
        setRenderAspect,
        setNoNetworking,
        setNoCloud,
        setPaused,
        setScaleControls,
        setMouseSensitivity,
        setNoCursor,
        setSoftKeyboardLayout,
        setSoftKeyboardSymbols,
        setVolume,

        save: () => {
            return apiSave(store.getState() as any as State, nonSerializableStore, store.dispatch);
        },
        stop: async () => {
            store.dispatch(uiSlice.actions.hidden(true));
            const nonSerializableStore = getNonSerializableStore(store);
            if (nonSerializableStore.ci) {
                return nonSerializableStore.ci.exit();
            }
        },
    };
};

function setupRootElement(root: HTMLDivElement, nonSerializableStore: NonSerializableStore, store: Store) {
    nonSerializableStore.root = root;
    root.classList.add("jsdos-rso");
    root.addEventListener("contextmenu", (e) => {
        if (e.target !== null &&
            (e.target as HTMLElement).classList?.contains("contextmenu")) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        return false;
    });
    document.addEventListener("fullscreenchange", () => {
        const fullscreen = document.fullscreenElement === root;
        store.dispatch(uiSlice.actions.setFullScreen(fullscreen));
    });
    function listen() {
        store.dispatch(uiSlice.actions.documentHidden(document.hidden));
    };
    document.addEventListener("visibilitychange", listen);
}

(window as any).Dos = Dos;
