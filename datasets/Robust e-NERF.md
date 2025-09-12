---
{
    "name": "Robust e-NERF",
    "aliases": [],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "ESIM"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring",
        "High-speed Recognition",
        "Low Light Reconstruction",
        "3D Reconstruction",
        "SLAM"
    ],
    "description": "Frame/Event fusion (Motion Deblurring)",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": false,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "HuggingFace"
        ],
        "file_formats": [
            "ROSbag"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "HuggingFace",
                "url": "https://huggingface.co/datasets/wengflow/deblur-e-nerf",
                "format": "ROSbag",
                "available": true
            }
        ],
        "size_gb": 175.32,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Deblur e-NeRF: NeRF from Motion-Blurred Events under High-speed or Low-light Conditions",
        "doi": "10.1007/978-3-031-73232-4_11",
        "authors": [
            "Weng Fei Low",
            "Gim Hee Lee"
        ],
        "abstract": "The stark contrast in the design philosophy of an event camera makes it particularly ideal for operating under high-speed, high dynamic range and low-light conditions, where standard cameras underperform. Nonetheless, event cameras still suffer from some amount of motion blur, especially under these challenging conditions, in contrary to what most think. This is attributed to the limited bandwidth of the event sensor pixel, which is mostly proportional to the light intensity. Thus, to ensure that event cameras can truly excel in such conditions where it has an edge over standard cameras, it is crucial to account for event motion blur in downstream applications, especially reconstruction. However, none of the recent works on reconstructing Neural Radiance Fields (NeRFs) from events, nor event simulators, have considered the full effects of event motion blur. To this end, we propose, Deblur e-NeRF, a novel method to directly and effectively reconstruct blur-minimal NeRFs from motion-blurred events generated under high-speed motion or low-light conditions. The core component of this work is a physically-accurate pixel bandwidth model proposed to account for event motion blur under arbitrary speed and lighting conditions. We also introduce a novel threshold-normalized total variation loss to improve the regularization of large textureless patches. Experiments on real and novel realistically simulated sequences verify our effectiveness. Our code, event simulator and synthetic event dataset will be open-sourced.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 6,
            "updated": "2025-07-09T09:22:40.920392"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2409.17988"
        },
        {
            "type": "paper",
            "url": "https://link.springer.com/chapter/10.1007/978-3-031-73232-4_11"
        },
        {
            "type": "project_page",
            "url": "https://wengflow.github.io/deblur-e-nerf/"
        }
    ],
    "full_name": "",
    "bibtex": {
        "pages": "192--209",
        "year": 2025,
        "editor": "Leonardis, Ale\u0161 and Ricci, Elisa and Roth, Stefan and Russakovsky, Olga and Sattler, Torsten and Varol, G\u00fcl",
        "author": "Low, Weng Fei and Lee, Gim Hee",
        "publisher": "Springer Nature Switzerland",
        "booktitle": "Computer {Vision} \u2013 {ECCV} 2024",
        "doi": "10.1007/978-3-031-73232-4_11",
        "isbn": "978-3-031-73232-4",
        "title": "Deblur e-{NeRF}: {NeRF} from {Motion}-{Blurred} {Events} under {High}-speed or {Low}-light {Conditions}",
        "address": "Cham",
        "type": "inproceedings",
        "key": "low_deblur_2025"
    }
}
---

### Dataset Description

This is a synthetic event dataset used in [**Deblur _e_-NeRF**](https://wengflow.github.io/deblur-e-nerf) to study the collective effect of camera speed and scene illuminance on the quality of NeRF reconstruction from a moving event camera.

It is an extension of the synthetic event dataset used in [**Robust _e_-NeRF**](https://wengflow.github.io/robust-e-nerf). The dataset is simulated using an [improved version of ESIM](https://github.com/wengflow/rpg_esim) with three different camera configurations of increasing difficulty levels (_i.e._ _easy_, _medium_ and _hard_) on seven Realistic Synthetic 360 scenes (adopted in the synthetic experiments of NeRF), resulting in a total of 21 sequence recordings. Please refer to the [Deblur _e_-NeRF paper](https://arxiv.org/abs/2409.17988) for more details.

This synthetic event dataset allows for a retrospective comparison between event-based and image-based NeRF reconstruction methods, as the event sequences were simulated under highly similar conditions as the NeRF synthetic dataset. In particular, we adopt the same camera intrinsics and camera distance to the object at the origin. Furthermore, the event camera travels in a hemi-/spherical spiral motion about the object, thereby having a similar camera pose distribution for training. Apart from that, we also use the same test camera poses/views. Nonetheless, this new synthetic event dataset is not only specific to NeRF reconstruction, but also suitable for novel view synthesis, 3D reconstruction, localization and SLAM in general.

### Dataset Structure

The following code was used to calculate the size of the dataset:

```python

%pip install huggingface_hub

from huggingface_hub import HfApi

def print_dataset_file_sizes(repo_id: str):
	api = HfApi()
	info = api.dataset_info(repo_id=repo_id, files_metadata=True)


total_bytes = 0
print(f"Sizes for '{repo_id}':\n")
for f in info.siblings:
	size = f.size or 0
	total_bytes += size
	print(f"{f.rfilename:60s} {size/(1024**2):8.2f} MiB")

mib = total_bytes/(1024**2)
gib = total_bytes/(1024**3)

print(f"\nTotal: {mib:.2f} MiB ({gib:.2f} GiB)")



if __name__ == "__main__":
	print_dataset_file_sizes("wengflow/deblur-e-nerf")

```

The above code can be run using a Jupyter Notebook, or directly in Google CoLab
