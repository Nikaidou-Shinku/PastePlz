// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en" class="bg-[#f0f0f0]">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/png" href="/favicon.png" />
          {assets}
        </head>
        <body>
          <div id="app" class="m-auto max-w-[1080px] p-2 sm:p-4 lg:p-6">
            {children}
          </div>
          {scripts}
        </body>
      </html>
    )}
  />
));
