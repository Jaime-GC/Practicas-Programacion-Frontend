import { signal } from "@preact/signals";
import { projectType } from "../types.ts";

export const mostrarModalCrearProyectoSignal = signal<boolean>(false);
export const proyectosSignal = signal<projectType[]>([]);
export const proyectoIDSeleccionadoSignal = signal<string>("");

export const proyectoCreadoSignal = signal<boolean>(false);
