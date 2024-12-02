import { A } from "@solidjs/router";

export default () => (
  <h1 class="text-xl font-extrabold sm:text-3xl lg:text-5xl">
    Hello,{" "}
    <A
      class="bg-[linear-gradient(45deg,var(--tw-gradient-stops))] from-[#7c3aed] via-[#da62c4_30%] to-[white_60%] bg-[length:400%] bg-clip-text text-transparent"
      href="/"
    >
      PastePlz
    </A>
    !
  </h1>
);
