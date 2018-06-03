export class Player {
  constructor(
    public name: string,
    public position: number,
    public experience: number
  ) {}
}

export const PositionEnum = {
  '0': 'Verteidiger',
  '1': 'Stürmer'
};

export const ExperienceEnum = {
  '0': 'wenig',
  '1': 'mittel',
  '2': 'viel'
};
