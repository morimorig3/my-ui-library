import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { Button } from "../../../components/ui/Button";
import { cn } from "../../../lib/cn";

/** 押した結果を少しの間だけ出す。続けて押すと、出している時間を数え直す */
const useFlash = (duration = 1400) => {
  const [at, setAt] = useState<number | null>(null);

  useEffect(() => {
    if (at === null) return;
    const timer = setTimeout(() => setAt(null), duration);
    return () => clearTimeout(timer);
  }, [at, duration]);

  return [at !== null, () => setAt(Date.now())] as const;
};

const Result = ({ shown, children }: { shown: boolean; children: ReactNode }) => (
  <p
    className={cn(
      "min-h-[1.8em] text-sm text-primary-pressed transition-opacity duration-200 motion-reduce:transition-none",
      shown ? "opacity-100" : "opacity-0",
    )}
    aria-live="polite"
  >
    {shown ? children : ""}
  </p>
);

const Stack = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col items-center gap-2.5">{children}</div>
);

/**
 * Button と同じ見た目を Tailwind で作ったもの。Button の見た目は CSS Modules で決まっていて
 * 押した見た目の出し方を変えられないので、見比べでは押した状態を pressed で受け取る
 */
const lookClass = (pressed: boolean) =>
  cn(
    "inline-flex h-12 w-40 items-center justify-center rounded-xl bg-primary text-[15px] font-bold tracking-[0.04em] text-bg-white select-none",
    "shadow-[0_1px_2px_rgba(34,99,107,0.35),0_4px_12px_rgba(47,125,134,0.18)] transition-[transform,background-color,box-shadow] duration-100 motion-reduce:transition-[background-color]",
    pressed &&
      "scale-[0.97] bg-primary-pressed shadow-[0_1px_1px_rgba(34,99,107,0.3)] motion-reduce:scale-100",
  );

const focusClass =
  "cursor-pointer outline-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-pressed";

const isPressKey = (e: KeyboardEvent) => e.key === " " || e.key === "Enter";

/** 押している最中かどうかを、delay ミリ秒遅らせて返す */
const useDelayedPress = (delay: number) => {
  const [pressed, setPressed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const set = (next: boolean) => {
    clearTimeout(timer.current);
    if (delay === 0) setPressed(next);
    else timer.current = setTimeout(() => setPressed(next), delay);
  };

  const handlers = {
    onPointerDown: () => set(true),
    onPointerUp: () => set(false),
    onPointerLeave: () => set(false),
    onPointerCancel: () => set(false),
    onKeyDown: (e: KeyboardEvent) => {
      if (isPressKey(e) && !e.repeat) set(true);
    },
    onKeyUp: (e: KeyboardEvent) => {
      if (isPressKey(e)) set(false);
    },
    onBlur: () => set(false),
  };

  return { pressed, handlers };
};

/* 1. 押したら、すぐに返事がある */

export const PressFeedbackDemo = ({ delay }: { delay: number }) => {
  const { pressed, handlers } = useDelayedPress(delay);
  const [done, flash] = useFlash();

  return (
    <Stack>
      <button
        type="button"
        className={cn(lookClass(pressed), focusClass)}
        onClick={flash}
        {...handlers}
      >
        送信する
      </button>
      <Result shown={done}>送信しました</Result>
    </Stack>
  );
};

/* 2. 待たせるときは、待っていると伝える */

export const WaitingDemo = ({ showSpinner }: { showSpinner: boolean }) => {
  const [waiting, setWaiting] = useState(false);
  const [done, flash] = useFlash();
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const send = () => {
    // 印を出さない側も、待っている間に二度は送らない
    if (waiting) return;
    setWaiting(true);
    timer.current = setTimeout(() => {
      setWaiting(false);
      flash();
    }, 2000);
  };

  return (
    <Stack>
      <Button className="w-40" loading={showSpinner && waiting} onClick={send}>
        送信する
      </Button>
      <Result shown={done}>送信しました</Result>
    </Stack>
  );
};

/* 3. 見ただけで押せると分かる */

export const SignifierDemo = ({ looksLikeButton }: { looksLikeButton: boolean }) => {
  const [done, flash] = useFlash();

  return (
    <Stack>
      <p className="text-sm">下書きは、まだ保存されていません。</p>
      {looksLikeButton ? (
        <Button className="w-40" onClick={flash}>
          保存する
        </Button>
      ) : (
        <button
          type="button"
          className={cn("inline-flex h-12 w-40 items-center justify-center text-sm", focusClass)}
          onClick={flash}
        >
          保存する
        </button>
      )}
      <Result shown={done}>保存しました</Result>
    </Stack>
  );
};

/* 4. 押せる範囲を広くとる */

export const HitAreaDemo = ({ wide }: { wide: boolean }) => {
  const { pressed, handlers } = useDelayedPress(0);
  const [done, flash] = useFlash();

  return (
    <Stack>
      {wide ? (
        <button
          type="button"
          className={cn(lookClass(pressed), focusClass)}
          onClick={flash}
          {...handlers}
        >
          送信する
        </button>
      ) : (
        // 見た目は同じ。押せるのは真ん中の文字の上だけ
        <div className={lookClass(pressed)}>
          <button
            type="button"
            className="cursor-pointer rounded-sm leading-none outline-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-bg-white"
            onClick={flash}
            {...handlers}
          >
            送信する
          </button>
        </div>
      )}
      <Result shown={done}>送信しました</Result>
    </Stack>
  );
};

/* 5. 離すまでは、やめられる */

export const ReleaseDemo = ({ onRelease }: { onRelease: boolean }) => {
  const [done, flash] = useFlash();

  return (
    <Stack>
      {onRelease ? (
        // ふつうのボタンは、指を離したときに動く。外へずらして離すと動かない
        <Button className="w-40" onClick={flash}>
          送信する
        </Button>
      ) : (
        <Button
          className="w-40"
          onPointerDown={(e) => {
            if (e.button === 0) flash();
          }}
          onKeyDown={(e) => {
            if (isPressKey(e) && !e.repeat) {
              e.preventDefault();
              flash();
            }
          }}
        >
          送信する
        </Button>
      )}
      <Result shown={done}>送信しました</Result>
    </Stack>
  );
};
