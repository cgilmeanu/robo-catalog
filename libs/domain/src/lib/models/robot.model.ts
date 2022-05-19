import { Entity, RobotEntity } from '../abstractions';

export class Robot extends Entity implements RobotEntity {
  private constructor(
    public readonly id: number,
    public readonly name: string,
    baseUrl: string
  ) {
    super(baseUrl);
  }

  static create(id: number, name: string, baseUrl: string): RobotEntity {
    return new Robot(id, name, baseUrl);
  }

  url(): string {
    return `${this.baseUrl}${this.id}?set2&size=180x180`;
  }
}
