<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the design-first Nautilius experience on the index route with in-page section navigation; content is provisional and no backend is required.
- Use global semantic color tokens and the shared Button for controls to maintain a coherent visual system.
- Brand and client media (logo, awards, client/featured logos, team and project photos) live as CDN pointers under src/assets/brand and src/assets/work; why: keeps the repo light.
- Each service has its own page at /services/<slug>; service data lives in src/lib/services.ts so home and service pages share it.
