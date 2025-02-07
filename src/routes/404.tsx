import { A } from "@solidjs/router";

export default () => (
  <div class="flex flex-col items-center space-y-4 bg-neutral-50 py-8">
    <h1 class="text-3xl">
      Hello,{" "}
      <A class="underline transition-colors hover:text-neutral-600" href="/">
        PastePlz
      </A>
      !
    </h1>
    <h2 class="text-2xl">Whoops!</h2>
    <p>404 Page Not Found</p>
    <A class="underline transition-colors hover:text-neutral-600" href="/">
      Let's get you back
    </A>
  </div>
);
