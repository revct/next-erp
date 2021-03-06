import { ModalProps } from "@mantine/core";
import { ConfirmModalProps } from "@mantine/modals/lib/ConfirmModal";
import { createContext } from "react";

export type ModalSettings = Partial<Omit<ModalProps, "opened">>;

export type ConfirmLabels = Record<"confirm" | "cancel", string>;

export interface OpenConfirmModal extends ModalSettings, ConfirmModalProps {}
export interface OpenContextModal extends ModalSettings {}

export type ModalState =
  | { id: string; props: ModalSettings; type: "content" }
  | { id: string; props: OpenConfirmModal; type: "confirm" }
  | { id: string; props: Record<string, any>; type: "context"; ctx: string };

export interface ModalsContext {
  modals: ModalState[];
  openModal: (props: ModalSettings) => string;
  openConfirmModal: (props: OpenConfirmModal) => string;
  openContextModal: (modal: string, props: Record<string, any>) => string;
  closeModal: (id: any) => void;
  closeAll: () => void;
}

export const modalsContext = createContext<ModalsContext>({
  modals: [],
  openModal: () => "",
  openConfirmModal: () => "",
  openContextModal: () => "",
  closeAll: () => {},
  closeModal: () => {},
});
