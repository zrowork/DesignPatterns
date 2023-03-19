import { RemoteControl } from "./abstraction-layer";
import { TelevisionProvider } from "./implementation-layer";

console.log("Bridge Design Pattern playground works");

const samsungTV = new RemoteControl(new TelevisionProvider());

samsungTV.changeChannel("discovery channel");
samsungTV.getChannel();
samsungTV.increaseVolume();
samsungTV.getVolume();
