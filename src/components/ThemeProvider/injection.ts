import { themes } from "@/utils";

export const themeInjectionScript = `
  (function() {
    function getInitialThemeName() {
        const persistedThemeName = window.localStorage.getItem('theme-name');
        const hasPersistedPreference = typeof persistedThemeName === 'string';
        // If the user has explicitly chosen light or dark,
        // let's use it. Otherwise, this value will be null.
        if (hasPersistedPreference) {
          return persistedThemeName;
        }
        // If they haven't been explicit, let's check the media
        // query
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference) {
          return mql.matches ? 'dark' : 'light';
        }
        // If they are using a browser/OS that doesn't support
        // color themes, let's default to 'light'.
        return 'light';
    }
    const themeName = getInitialThemeName();
    const root = document.documentElement;
    root.style.setProperty(
      '--color-text',
      themeName === 'light'
        ? '${themes.light.text}'
        : '${themes.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      themeName === 'light'
        ? '${themes.light.background}'
        : '${themes.dark.background}'
    );
    root.style.setProperty('--initial-theme-name', themeName);
  })()
`;
