import { A } from "@solidjs/router";
import { Title } from "@solidjs/meta";

export default () => (
  <>
    <Title>This page got lost...</Title>
    <div class="mt-10 flex flex-col items-center sm:mt-20 lg:mt-40">
      <h1 class="my-5 text-3xl font-bold sm:my-8 sm:text-5xl lg:my-11 lg:text-7xl">
        Whoops!
      </h1>
      <p class="my-4 sm:my-6 sm:text-2xl lg:my-8 lg:text-4xl">
        404 Page Not Found
      </p>
      <A
        class="text-blue-500 hover:text-blue-700 sm:text-2xl lg:text-4xl"
        href="/"
      >
        Let's get you back
      </A>
    </div>
  </>
);
