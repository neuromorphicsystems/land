---
{
    "name": "HS-ESPAD",
    "aliases": [
        "SimSPAD"
    ],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "Prophesee Gen4"
    ],
    "other_sensors": [
        "SwissSPAD2",
        "FLIR BlackFly S"
    ],
    "category": "Domain Specific Application",
    "tags": [
        "Frame Reconstruction",
        "SPAD"
    ],
    "description": "Enhancing SPAD imaging with event cameras",
    "dataset_properties": {
        "available_online": false,
        "has_real_data": true,
        "has_simulated_data": true,
        "has_ground_truth": true,
        "has_frames": false,
        "has_biases": false,
        "distribution_methods": [],
        "file_formats": [],
        "availability_comment": "",
        "dataset_links": []
    },
    "paper": {
        "title": "Event Cameras Meet SPADs for High-Speed, Low-Bandwidth Imaging",
        "doi": "10.48550/arXiv.2404.11511",
        "authors": [
            "Manasi Muglikar",
            "Siddharth Somasundaram",
            "Akshat Dave",
            "Edoardo Charbon",
            "Ramesh Raskar",
            "Davide Scaramuzza"
        ],
        "abstract": "Traditional cameras face a trade-off between low-light performance and high-speed imaging: longer exposure times to capture sufficient light results in motion blur, whereas shorter exposures result in Poisson-corrupted noisy images. While burst photography techniques help mitigate this tradeoff, conventional cameras are fundamentally limited in their sensor noise characteristics. Event cameras and single-photon avalanche diode (SPAD) sensors have emerged as promising alternatives to conventional cameras due to their desirable properties. SPADs are capable of single-photon sensitivity with microsecond temporal resolution, and event cameras can measure brightness changes up to 1 MHz with low bandwidth requirements. We show that these properties are complementary, and can help achieve low-light, high-speed image reconstruction with low bandwidth requirements. We introduce a sensor fusion framework to combine SPADs with event cameras to improves the reconstruction of high-speed, low-light scenes while reducing the high bandwidth cost associated with using every SPAD frame. Our evaluation, on both synthetic and real sensor data, demonstrates significant enhancements ( > 5 dB PSNR) in reconstructing low-light scenes at high temporal resolution (100 kHz) compared to conventional cameras. Event-SPAD fusion shows great promise for real-world applications, such as robotics or medical imaging.",
        "open_access": false
    },
    "citation_counts": [
        {
            "source": "scholar",
            "count": 2,
            "updated": "2025-07-11T08:24:54.598244"
        }
    ],
    "links": [
        {
            "type": "preprint",
            "url": "https://arxiv.org/abs/2404.11511"
        },
        {
            "type": "paper",
            "url": "https://arxiv.org/abs/2404.11511"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "stereo": false
    },
    "bibtex": {
        "keywords": "Computer Science - Computer Vision and Pattern Recognition, Electrical Engineering and Systems Science - Image and Video Processing",
        "note": "arXiv:2404.11511 [eess]",
        "year": 2024,
        "month": "apr",
        "author": "Muglikar, Manasi and Somasundaram, Siddharth and Dave, Akshat and Charbon, Edoardo and Raskar, Ramesh and Scaramuzza, Davide",
        "publisher": "arXiv",
        "urldate": "2024-12-15",
        "language": "en",
        "doi": "10.48550/arXiv.2404.11511",
        "url": "http://arxiv.org/abs/2404.11511",
        "title": "Event {Cameras} {Meet} {SPADs} for {High}-{Speed}, {Low}-{Bandwidth} {Imaging}",
        "type": "misc",
        "key": "muglikar_event_2024"
    }
}
---

### Dataset Structure
