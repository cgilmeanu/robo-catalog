import { Injectable } from '@angular/core';
import { Robot, RobotEntity, RobotFactory } from '@robo/domain';
import { combineLatestAll, map, Observable, of, range } from 'rxjs';

@Injectable()
export class RobotFactoryService implements RobotFactory {
  private readonly baseRobotUrl = 'https://robohash.org/';
  assembleRobots(count: number): Observable<RobotEntity[]> {
    return range(1, count).pipe(
      map((id) => 5 * id),
      map((id) =>
        of(Robot.create(id, `Robot Seria X${id}`, this.baseRobotUrl))
      ),
      combineLatestAll()
    );
  }
}
