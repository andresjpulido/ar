import React from "react";

export default function Viewer() {
	return (
		<a-scene
			vr-mode-ui="enabled: false"
			embedded
			arjs="sourceType: webcam; debugUIEnabled: false;"
		>
			<a-entity
				gltf-model="articuno/scene.gltf"
				scale="0.2 0.2 0.2"
				look-at="[gps-camera]"
				gps-entity-place="latitude: -36.886094; longitude: 174.677628;"
			></a-entity>

			<a-entity
				gltf-model="articuno/scene.gltf"
				scale="0.2 0.2 0.2"
				look-at="[gps-camera]"
				gps-entity-place="latitude: -36.886288; longitude: 174.677796;"
			></a-entity>

			<a-entity
				gltf-model="articuno/scene.gltf"
				scale="0.2 0.2 0.2"
				look-at="[gps-camera]"
				gps-entity-place="latitude: -36.886179; longitude: 174.677870;"
			></a-entity>

			<a-entity
				gltf-model="articuno/scene.gltf"
				scale="0.2 0.2 0.2"
				look-at="[gps-camera]"
				gps-entity-place="latitude: -36.886263; longitude: 174.677712;"
			></a-entity>

			<a-camera
				gps-camera
				rotation-reader
				minDistance="20"
				arjs-look-controls="smoothingFactor: 0.1"
			></a-camera>
		</a-scene>
	);
}
