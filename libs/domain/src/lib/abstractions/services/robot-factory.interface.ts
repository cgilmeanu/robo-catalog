import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RobotEntity } from '../entities';

export interface RobotFactory {
  assembleRobots(count: number): Observable<RobotEntity[]>;
}

export const ROBOT_FACTORY = new InjectionToken<RobotFactory>(
  'robo.robot-factory'
);
