import { Show } from "solid-js";
import { A, createAsync, useParams } from "@solidjs/router";
import { getPaste } from "~/lib";
import View from "~/components/View";

export default () => {
  const params = useParams();

  const paste = createAsync(() => getPaste(params.id));

  return (
    <div class="flex flex-col items-center space-y-8 bg-neutral-50 py-8">
      <h1 class="text-3xl">
        Hello,{" "}
        <A class="underline transition-colors hover:text-neutral-600" href="/">
          PastePlz
        </A>
        !
      </h1>
      <Show when={paste.latest}>{(paste) => <View {...paste()} />}</Show>
    </div>
  );
};
