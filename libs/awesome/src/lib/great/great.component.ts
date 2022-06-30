import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

/**
   * This is a component
   */
@Component({
  selector: 'acme-great',
  templateUrl: './great.component.html',
  styleUrls: ['./great.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GreatComponent {
  /**
   * This is an input
   */
  @Input()
  /**
   * This is a test
   */
  public message: string | null = null;
}
