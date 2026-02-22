export class IKNLogoControl {
    onAdd(map) {
        this._container = document.createElement('div');
        this._container.className = 'matplibregl-ctrl';
        this._container.innerHTML = `
            <img 
                src="src/assets/img/logo-ikn.png" 
                alt="Logo IKN" 
                style="width: 80px;"
            >`;

        return this._container
    };

    onRemove() {
        this._container.parentNode.removeChild(this._container);
    }
}

export class GarudaLogoControl {
    onAdd(map) {
        this._container = document.createElement('div');
        this._container.className = 'maplibregl-ctrl';
        this._container.innerHTML = `
            <img 
                src="src/assets/img/logo-garuda.png" 
                alt="Logo IKN" 
                style="width: 80px;"
            >`;

        return this._container
    };

    onRemove() {
        this._container.parentNode.removeChild(this._container);
    }
}