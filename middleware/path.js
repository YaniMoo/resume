export default function ({ store, redirect, route }) {
    if (!route.name) {
        return redirect('/en')
    }
}