---
{
    "name": "StEIC",
    "aliases": [],
    "year": 2025,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen3"
    ],
    "other_sensors": [
        "Intel Realsense D455"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring"
    ],
    "description": "Stereo De-blurring Dataset",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "Github page states that data will be provided soon, but the repository has not been updated in 2 years.",
        "dataset_links": [],
        "size_gb": 0.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "Learning Parallax for Stereo Event-based Motion Deblurring",
        "doi": "10.1109/TCSVT.2025.3570786",
        "authors": [
            "Mingyuan Lin",
            "Chi Zhang",
            "Chu He",
            "Lei Yu"
        ],
        "abstract": "Due to the extremely low latency, events have recently been utilized to complement lost information in motion deblurring. Existing approaches largely rely on the perfect pixel-wise alignment between intensity images and events, which usually conflicts with the real world. To tackle this problem, we propose a novel coarse-to-fine framework, named network of event-based motion deblurring with stereo event and intensity cameras (St-EDNet), to recover high-quality images directly from the misaligned inputs that contain both blurry images and the concurrent event stream. Specifically, the coarse spatial alignment of the blurry image and the event stream is first implemented with a cross-modal stereo-matching module without the need for ground-truth depths. Then, a dual-feature embedding architecture is proposed to gradually build the fine bidirectional association of the coarsely aligned data and reconstruct the sequence of the latent sharp images. Furthermore, we build a new dataset with stereo event and intensity cameras (StEIC), containing real-world events, intensity images, and dense disparity maps. Experiments on real-world datasets demonstrate the superiority of the proposed network over state-of-the-art methods. The code and dataset are available at https://mingyuan-lin.github.io/St-ED_web/.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 0,
            "updated": "2025-09-18T23:40:58.548093"
        },
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-09-18T23:40:59.354215"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2309.09513"
        },
        {
            "type": "paper",
            "url": "https://ieeexplore.ieee.org/document/11006114"
        }
    ],
    "full_name": "STereo Event and Intensity Cameras dataset (StEIC)",
    "additional_metadata": {
        "num_recordings": "65"
    },
    "referenced_papers": [],
    "bibtex": {
        "pages": "1\u20131",
        "year": 2025,
        "author": "Lin, Mingyuan and Zhang, Chi and He, Chu and Yu, Lei",
        "publisher": "Institute of Electrical and Electronics Engineers (IEEE)",
        "journal": "IEEE Transactions on Circuits and Systems for Video Technology",
        "doi": "10.1109/tcsvt.2025.3570786",
        "url": "http://dx.doi.org/10.1109/TCSVT.2025.3570786",
        "issn": "1558-2205",
        "title": "Learning Parallax for Stereo Event-based Motion Deblurring",
        "type": "article",
        "key": "Lin_2025"
    }
}
---

# Dataset Description