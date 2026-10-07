import { useState, type FocusEvent, type KeyboardEvent, type PointerEvent } from "react";

export interface InteractionState {
  /** マウスなどのカーソルが乗っている。指で触る画面では起きない */
  hover: boolean;
  /** キーボードで選ばれている（:focus-visible のとき） */
  focusVisible: boolean;
  /** 押している最中 */
  pressed: boolean;
}

interface Options {
  /** 押している最中とみなすキー。チェックボックスなら Space だけにする */
  pressKeys?: string[];
}

/**
 * 要素へのホバー、キーボードでのフォーカス、押している最中を見分ける。
 * 返した handlers を対象の要素にそのまま渡す。
 */
export const useInteractionState = ({ pressKeys = [" ", "Enter"] }: Options = {}) => {
  const [state, setState] = useState<InteractionState>({
    hover: false,
    focusVisible: false,
    pressed: false,
  });
  const update = (patch: Partial<InteractionState>) => setState((s) => ({ ...s, ...patch }));

  const handlers = {
    onPointerEnter: (e: PointerEvent) => {
      if (e.pointerType === "mouse") update({ hover: true });
    },
    onPointerLeave: () => update({ hover: false, pressed: false }),
    // マウスで押すとリングは消えるので、フォーカスの表示もやめる
    onPointerDown: () => update({ pressed: true, focusVisible: false }),
    onPointerUp: () => update({ pressed: false }),
    onPointerCancel: () => update({ pressed: false }),
    onFocus: (e: FocusEvent<HTMLElement>) =>
      update({ focusVisible: e.currentTarget.matches(":focus-visible") }),
    onBlur: () => update({ focusVisible: false, pressed: false }),
    onKeyDown: (e: KeyboardEvent) => {
      if (pressKeys.includes(e.key) && !e.repeat) update({ pressed: true });
    },
    onKeyUp: (e: KeyboardEvent) => {
      if (pressKeys.includes(e.key)) update({ pressed: false });
    },
  };

  return { state, handlers };
};
