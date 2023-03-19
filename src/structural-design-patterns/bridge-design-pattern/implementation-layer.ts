// The "implementation" interface declares methods common to all
// concrete implementation classes. It doesn't have to match the
// abstraction's interface. In fact, the two interfaces can be
// entirely different. Typically the implementation interface
// provides only primitive operations, while the abstraction
// defines higher-level operations based on those primitives.

export interface DeviceProvider {
  isEnabled: boolean;
  volume: number;
  enable: () => void;
  disable: () => void;
  setVolumeUp: () => void;
  setVolumeDown: () => void;
  getVolume: () => number;
  setChannel: (channel: string) => void;
  getChannel: () => string;
}

export class TelevisionProvider implements DeviceProvider {
  // these properties work as a state.
  // In real-app the values would be taken
  // for example from the State, BehaviorSubject
  isEnabled = false;
  volume = 0;
  channel!: string;

  /**
   * Methods provided by DeviceProvider interface
   */
  enable(): void {
    this.isEnabled = true;
  }

  disable(): void {
    this.isEnabled = false;
  }

  setVolumeUp(): void {
    this.volume = this.volume + 1;
  }

  setVolumeDown(): void {
    this.volume = this.volume - 1;
  }

  setChannel(channel: string): void {
    this.channel = channel;
  }

  getChannel(): string {
    return this.channel;
  }

  getVolume(): number {
    return this.volume;
  }

  /**
   * Methods
   */
}
