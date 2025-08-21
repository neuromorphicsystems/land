---
{
    "name": "E3NeRF",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346 Colour",
        "V2E"
    ],
    "other_sensors": [],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring"
    ],
    "description": "Image de-blurring",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "Data will be available after publication",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1ZJsVq7rGEHd4ZIYPzdtrBPXrlckgE7Fa",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 0.08,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "E3NeRF: Efficient Event-Enhanced Neural Radiance Fields from Blurry Images",
        "doi": "10.48550/arXiv.2408.01840",
        "authors": [
            "Yunshan Qi",
            "Jia Li",
            "Yifan Zhao",
            "Yu Zhang",
            "Lin Zhu"
        ],
        "abstract": "Neural Radiance Fields (NeRF) achieve impressive rendering performance by learning volumetric 3D representation from several images of different views. However, it is difficult to reconstruct a sharp NeRF from blurry input as it often occurs in the wild. To solve this problem, we propose a novel Efficient Event-Enhanced NeRF (E3NeRF) by utilizing the combination of RGB images and event streams. To effectively introduce event streams into the neural volumetric representation learning process, we propose an event-enhanced blur rendering loss and an event rendering loss, which guide the network via modeling the real blur process and event generation process, respectively. Specifically, we leverage spatial-temporal information from the event stream to evenly distribute learning attention over temporal blur while simultaneously focusing on blurry texture through the spatial attention. Moreover, a camera pose estimation framework for real-world data is built with the guidance of the events to generalize the method to practical applications. Compared to previous image-based or event-based NeRF, our framework makes more profound use of the internal relationship between events and images. Extensive experiments on both synthetic data and real-world data demonstrate that E3NeRF can effectively learn a sharp NeRF from blurry images, especially in non-uniform motion and low-light scenes.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 1,
            "updated": "2025-06-12T16:44:01.946858"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2408.01840"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2408.01840v1"
        },
        {
            "type": "project_page",
            "url": "https://icvteam.github.io/E3NeRF.html"
        }
    ],
    "full_name": "Efficient Event-Enhanced Neural Radiance Fields (E3NeRF)",
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition",
        "note": "arXiv:2408.01840 [cs]",
        "year": 2024,
        "month": "aug",
        "author": "Qi, Yunshan and Li, Jia and Zhao, Yifan and Zhang, Yu and Zhu, Lin",
        "publisher": "arXiv",
        "urldate": "2024-12-01",
        "language": "en",
        "doi": "10.48550/arXiv.2408.01840",
        "url": "http://arxiv.org/abs/2408.01840",
        "shorttitle": "E\\${\\textasciicircum}3\\${NeRF}",
        "title": "E\\${\\textasciicircum}3\\${NeRF}: {Efficient} {Event}-{Enhanced} {Neural} {Radiance} {Fields} from {Blurry} {Images}",
        "type": "misc",
        "key": "qi_e3nerf_2024-1"
    }
}
---

### Dataset Structure
