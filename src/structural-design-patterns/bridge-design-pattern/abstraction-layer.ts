// The "abstraction" defines the interface for the "control"
// part of the two class hierarchies. It maintains a reference
// to an object of the "implementation" hierarchy and delegates

import { DeviceProvider } from "./implementation-layer";

// all of the real work to this object.
export class RemoteControl {
  constructor(private _deviceProvider: DeviceProvider) {}

  togglePower() {
    this._deviceProvider.isEnabled
      ? this._deviceProvider.disable()
      : this._deviceProvider.enable();
  }

  changeChannel(channel: string) {
    this._deviceProvider.setChannel(channel);
  }

  getChannel(): string {
    const channel = this._deviceProvider.getChannel();
    console.log("CHANNEL", channel);
    return channel;
  }

  increaseVolume() {
    this._deviceProvider.setVolumeUp();
  }

  decreaseVolume(): void {
    this._deviceProvider.setVolumeDown;
  }

  getVolume(): number {
    const volume = this._deviceProvider.getVolume();
    console.log("VOLUME", volume);
    return volume;
  }
}
