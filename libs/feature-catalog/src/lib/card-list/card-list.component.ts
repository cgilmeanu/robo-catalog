import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Robot, RobotEntity, RobotFactory, ROBOT_FACTORY } from '@robo/domain';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'robo-catalog-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent implements OnInit {
  robots$!: Observable<RobotEntity[]>;
  constructor(
    @Inject(ROBOT_FACTORY) public readonly robotFactory: RobotFactory
  ) {}

  ngOnInit(): void {
    this.robots$ = this.robotFactory
      .assembleRobots(8)
      .pipe(tap((e) => console.log(e)));
  }
}
