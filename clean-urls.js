(() => {
    const { pathname, search, hash } = window.location;

    if (/\.html$/i.test(pathname)) {
        window.history.replaceState(
            window.history.state,
            "",
            `${pathname.replace(/\.html$/i, "")}${search}${hash}`
        );
    }
})();
