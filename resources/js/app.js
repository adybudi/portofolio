import './bootstrap';

import Alpine from 'alpinejs';
import { 
    initHeroParticleWave, 
    initTech3DGlobe 
} from './3d-effects';

window.Alpine = Alpine;

Alpine.start();

document.addEventListener('DOMContentLoaded', () => {
    initHeroParticleWave();
    initTech3DGlobe();
});
