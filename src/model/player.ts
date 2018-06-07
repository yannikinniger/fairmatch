export class Player {
  constructor(
    public name: string,
    public position: number,
    public experience: number
  ) {}
}

export const Positions = ['Verteidiger', 'Stürmer'];

export const ExperienceArray = ['wenig', 'viel', 'mittel'];
