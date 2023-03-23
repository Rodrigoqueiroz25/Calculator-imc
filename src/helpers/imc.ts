
export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    {title: 'Magreza', color: '#96a3ab', icon: 'down', imc:[0, 18.5]},
    {title: 'Normal', color: '#0ead69', icon: 'up', imc:[18.6, 24.9]},
    {title: 'Sobrepeso', color: '#eab039', icon: 'down', imc:[25, 30]},
    {title: 'Obesidade', color: '#c3423f', icon: 'down', imc:[30.1, 99]}
];

export const calculateImc = (height: number, weight: number): Level | null => {
    const imc = weight / (height * height);
    
    for (const key in levels) {
       if(imc >= levels[key].imc[0] && imc <= levels[key].imc[1]){
            let levelCopy: Level = {...levels[key]};
            levelCopy.yourImc = parseFloat(imc.toFixed(3));
            return levelCopy;
       }
    }
    return null;
}