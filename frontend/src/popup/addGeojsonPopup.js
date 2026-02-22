export function showNameWebsitePopup(event, popup) {
    const feature = event.features[0];
    const properties = feature.properties

    const content = `
        <h3>${properties.name}</h3>
        <a href="${properties.website || undefined}" target="_blank">
            ${properties.website || 'Tidak tersedia'}
        </a>
    `

    return popup
        .setLngLat(event.lngLat)
        .setHTML(content)
}