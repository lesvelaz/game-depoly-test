const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.destroy,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Platform.Acts.SetIgnoreInput
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Morro: 0},
	{Solid: 0},
	{Ground: 0},
	{Wall: 0},
	{Keyboard: 0},
	{Spikes: 0},
	{GreenDoor: 0},
	{DestroyOutsideLayout: 0},
	{Physics: 0},
	{Star: 0}
];

self.InstanceType = {
	Morro: class extends self.ISpriteInstance {},
	Ground: class extends self.ITiledBackgroundInstance {},
	Platform: class extends self.ITiledBackgroundInstance {},
	Wall: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Spikes: class extends self.ITiledBackgroundInstance {},
	GreenDoor: class extends self.ISpriteInstance {},
	Star: class extends self.ISpriteInstance {}
}