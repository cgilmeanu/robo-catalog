import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RobotEntity } from '@robo/domain';

@Component({
  templateUrl: './card.components.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'robo-catalog-card',
})
export class CardComponent {
  @Input()
  robot!: RobotEntity;
}
