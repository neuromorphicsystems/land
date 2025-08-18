---
{
    "name": "EventNFS",
    "aliases": [
        "ENFS"
    ],
    "year": 2021,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Filtering and De-noising",
    "subcategory": [
        "De-noising",
        "Upscaling Resolution",
        "Monitor Conversion",
        "Object Tracking"
    ],
    "task": "De-noising and Upscaling",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [
            "Google Drive"
        ],
        "file_formats": [
            "CSV"
        ],
        "availability_comment": "",
        "dataset_links": [
            {
                "name": "Google Drive",
                "url": "https://sites.google.com/view/EventZoom",
                "format": "CSV",
                "available": true
            }
        ],
        "size_gb": 4.1,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EventZoom -  Learning To Denoise and Super Resolve Neuromorphic Events",
        "doi": "10.1109/CVPR46437.2021.01263",
        "authors": [
            "Peiqi Duan",
            "Zihao W. Wang",
            "Xinyu Zhou",
            "Yi Ma"
        ],
        "abstract": "We address the problem of jointly denoising and super resolving neuromorphic events, a novel visual signal that represents thresholded temporal gradients in a space-time window. The challenge for event signal processing is that they are asynchronously generated, and do not carry absolute intensity but only binary signs informing temporal variations. To study event signal formation and degradation, we implement a display-camera system which enables multi-resolution event recording. We further propose EventZoom, a deep neural framework with a backbone architecture of 3D U-Net. EventZoom is trained in a noise-to-noise fashion where the two ends of the network are unfiltered noisy events, enforcing noise-free event restoration. For resolution enhancement, EventZoom incorporates an event-toimage module supervised by high resolution images. Our results showed that EventZoom achieves at least 40\u00d7 temporal efficiency compared to state-of-the-art (SOTA) event denoisers. Additionally, we demonstrate that EventZoom enables performance improvements on applications including event-based visual object tracking and image reconstruction. EventZoom achieves SOTA super resolution image reconstruction results while being 10\u00d7 faster.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "crossref",
            "count": 41,
            "updated": "2024-10-26 12:54:43.896329"
        },
        {
            "source": "scholar",
            "count": 86,
            "updated": "2025-06-15T10:15:11.481052"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/papers/Duan_EventZoom_Learning_To_Denoise_and_Super_Resolve_Neuromorphic_Events_CVPR_2021_paper.pdf"
        },
        {
            "type": "paper",
            "url": "https://openaccess.thecvf.com/content/CVPR2021/html/Duan_EventZoom_Learning_To_Denoise_and_Super_Resolve_Neuromorphic_Events_CVPR_2021_paper.html"
        },
        {
            "type": "project_page",
            "url": "https://sites.google.com/view/EventZoom"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_recordings": "70",
        "total_duration": "60 minutes"
    },
    "bibtex": {
        "pages": "12819--12828",
        "year": 2021,
        "month": "jun",
        "author": "Duan, Peiqi and Wang, Zihao W. and Zhou, Xinyu and Ma, Yi and Shi, Boxin",
        "publisher": "IEEE",
        "booktitle": "2021 {IEEE}/{CVF} {Conference} on {Computer} {Vision} and {Pattern} {Recognition} ({CVPR})",
        "urldate": "2024-05-15",
        "language": "en",
        "doi": "10.1109/CVPR46437.2021.01263",
        "url": "https://ieeexplore.ieee.org/document/9578367/",
        "shorttitle": "{EventZoom}",
        "isbn": "978-1-66544-509-2",
        "copyright": "https://ieeexplore.ieee.org/Xplorehelp/downloads/license-information/IEEE.html",
        "title": "{EventZoom}: {Learning} to {Denoise} and {Super} {Resolve} {Neuromorphic} {Events}",
        "address": "Nashville, TN, USA",
        "type": "inproceedings",
        "key": "duan_eventzoom_2021"
    }
}
---


### Dataset Structure 

- Dataset contains 70 sequences
- Dataset contains approximately 60 minutes of recordings

    
### Dataset Files

| File                                                                                                      | Resolution | Size    |
| --------------------------------------------------------------------------------------------------------- | ---------- | ------- |
| [ev_hr.zip](https://drive.usercontent.google.com/open?id=1qFBtTh_QQ-qRMX6czVmDIbDeyMnWwa44&authuser=0)    | 222 x 124  | 3.4 GB  |
| [ev_lr_1.zip](https://drive.usercontent.google.com/open?id=1u_IK2Yovv5FUd1xEgWSLgHAsMenV76kM&authuser=0)  | 111 x 62   | 0.64 GB |
| [ev_lr_2.zip](https://drive.usercontent.google.com/open?id=16z0j0Pcq8Nek5wH1GtMbh_w_s71JN0nP&authuser=0)  | 111 x 62   | 0.12 GB |
| [ev_llr_2.zip](https://drive.usercontent.google.com/open?id=1Mam35TvsSqci-j2QG0Uwd5XAMfCR5TkQ&authuser=0) | 56 x 31    | 0.12 GB |
The index number of each file is corresponding to the sequence of the [Need-for-Speed (NFS) dataset](http://ci2cv.net/nfs/index.html) [14].