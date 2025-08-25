---
{
    "name": "BL2SHD",
    "aliases": [
        "BL2SHD-R",
        "BL2SHD-S",
        "BL2SHD-Rsimple",
        "BL2SHD-Rcomplex"
    ],
    "year": 2024,
    "modalities": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4",
        "ESIM"
    ],
    "other_sensors": [
        "FLIR BFS-U3-32S4",
        "LIR BFS-U3-04S"
    ],
    "category": "Intensity Reconstruction, Optical Flow, and Frame Fusion",
    "tags": [
        "De-blurring",
        "Beamsplitters"
    ],
    "description": "High dynamic range imaging",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": false,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "Numpy"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://drive.google.com/drive/folders/1cGjTEeurr6Ka4Tb5jTZDtB8IPlaBBuQG",
                "format": "Numpy",
                "available": true
            }
        ],
        "size_gb": 6.3,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "HDR Imaging for Dynamic Scenes with Events",
        "doi": "10.48550/arXiv.2404.03210",
        "authors": [
            "Xiaopeng Li",
            "Zhaoyuan Zeng",
            "Cien Fan",
            "Chen Zhao",
            "Lei Deng",
            "Lei Yu"
        ],
        "abstract": "High dynamic range imaging (HDRI) for real-world dynamic scenes is challenging because moving objects may lead tohybrid degradation of low dynamic range and motion blur. Existing event-based approaches only focus on a separate task, whilecascading HDRI and motion deblurring would lead to sub-optimal solutions, and unavailable ground-truth sharp HDR images aggravatethe predicament. To address these challenges, we propose an Event-based HDRI framework within a Self-supervised learning paradigm,i.e., Self-EHDRI, which generalizes HDRI performance in real-world dynamic scenarios. Specifically, a self-supervised learning strategyis carried out by learning cross-domain conversions from blurry LDR images to sharp LDR images, which enables sharp HDR imagesto be accessible in the intermediate process even though ground-truth sharp HDR images are missing. Then, we formulate the eventbased HDRI and motion deblurring model and conduct a unified network to recover the intermediate sharp HDR results, where boththe high dynamic range and high temporal resolution of events are leveraged simultaneously for compensation. We construct largescale synthetic and real-world datasets to evaluate the effectiveness of our method. Comprehensive experiments demonstrate that theproposed Self-EHDRI outperforms state-of-the-art approaches by a large margin. The codes, datasets, and results are available athttps://lxp-whu.github.io/Self-EHDRI.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 3,
            "updated": "2025-07-02T20:42:13.739213"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/pdf/2404.03210v1"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/pdf/2404.03210v1.pdf"
        },
        {
            "type": "project_page",
            "url": "https://lxp-whu.github.io/Self-EHDRI/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/LXP-WHU/Self-EHDRI-code"
        }
    ],
    "full_name": "Blurry LDR to Sharp HDR (BL2SH)",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Electrical Engineering and Systems Science - Image and Video Processing",
        "note": "arXiv:2404.03210 [cs]",
        "year": 2024,
        "month": "apr",
        "author": "Xiaopeng, Li and Zhaoyuan, Zeng and Cien, Fan and Chen, Zhao and Lei, Deng and Lei, Yu",
        "publisher": "arXiv",
        "urldate": "2024-12-08",
        "language": "en",
        "doi": "10.48550/arXiv.2404.03210",
        "url": "http://arxiv.org/abs/2404.03210",
        "title": "{HDR} {Imaging} for {Dynamic} {Scenes} with {Events}",
        "type": "misc",
        "key": "xiaopeng_hdr_2024"
    }
}
---

### Dataset Structure

The BL2SHD-R dataset is divided into two sub-datasets:

- **BL2SHD-Rsimple**: is collected in static scenes with camera ego-motion and thus only contains global blurry LDR observations. Since all pixels of the captured image are motionconsistent, the ground-truth HDR frames can be generatedby global aligning and merging the adjacent multi-exposure sharp LDR images.

- **BL2SHD-Rcomplex**: is collected in dynamic scenes withfast-moving targets, where the captured LDR images encompass global and local non-linear blur, which is more complex to handle. Due to the significant challenges associated with multi-frame registration for fast-moving targets, the ground-truth data for our dynamic scene dataset is currently unavailable.

In this manner, we collect a large-scale dataset containing 9600 aligned data in 48 static HDR scenes and 14400 aligned data in 72 dynamic HDR scenes
