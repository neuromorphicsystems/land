---
{
    "name": "EyeGraph",
    "aliases": [],
    "year": 2024,
    "modality": [
        "Vision"
    ],
    "sensors": [
        "DAVIS346"
    ],
    "other_sensors": [],
    "category": "Human-centric Recordings",
    "subcategory": [
        "Eye Tracking",
        "Gaze Tracking",
        "Blink Detection"
    ],
    "task": "Eye and Gaze Tracking",
    "dataset_properties": {
        "available_online": true,
        "has_real_data": true,
        "has_simulated_data": false,
        "has_ground_truth": true,
        "has_frames": true,
        "has_biases": false,
        "distribution_methods": [
            "SharePoint"
        ],
        "file_formats": [
            "aedat"
        ],
        "availability_comment": "Form submission required to access dataset",
        "dataset_links": [
            {
                "name": "SharePoint",
                "url": "https://forms.office.com/r/PgHHLxgMNj",
                "format": "aedat",
                "available": true
            }
        ],
        "size_gb": 115.0,
        "size_type": "Compressed"
    },
    "paper": {
        "title": "EyeGraph: Modularity-aware Spatio Temporal Graph Clustering for Continuous Event-based Eye Tracking",
        "doi": "10.5555/3737916.3741741",
        "authors": [
            "Nuwan Bandara",
            "Thivya Kandappu",
            "Argha Sen",
            "Ila Gokarn",
            "Archan Misra"
        ],
        "abstract": "Continuous tracking of eye movement dynamics plays a significant role in developing a broad spectrum of human-centered applications, such as cognitive skills (visual attention and working memory) modeling, human-machine interaction, biometric user authentication, and foveated rendering. Recently neuromorphic cameras have garnered significant interest in the eye-tracking research community, owing to their sub-microsecond latency in capturing intensity changes resulting from eye movements. Nevertheless, the existing approaches for event-based eye tracking suffer from several limitations: dependence on RGB frames, label sparsity, and training on datasets collected in controlled lab environments that do not adequately reflect real-world scenarios. To address these limitations, in this paper, we propose a dynamic graph-based approach that uses a neuromorphic event stream captured by Dynamic Vision Sensors (DVS) for high-fidelity tracking of pupillary movement. More specifically, first, we present EyeGraph, a large-scale multi-modal near-eye tracking dataset collected using a wearable event camera attached to a head-mounted device from 40 participants -- the dataset was curated while mimicking in-the-wild settings, accounting for varying mobility and ambient lighting conditions. Subsequently, to address the issue of label sparsity, we adopt an unsupervised topology-aware approach as a benchmark. To be specific, (a) we first construct a dynamic graph using Gaussian Mixture Models (GMM), resulting in a uniform and detailed representation of eye morphology features, facilitating accurate modeling of pupil and iris. Then (b) apply a novel topologically guided modularity-aware graph clustering approach to precisely track the movement of the pupil and address the label sparsity in event-based eye tracking. We show that our unsupervised approach has comparable performance against the supervised approaches while consistently outperforming the conventional clustering approaches.",
        "open_access": false
    },
    "citation_counts": [],
    "links": [
        {
            "type": "preprint",
            "url": "https://papers.nips.cc/paper/2024/file/d9d40ea135f064d9e49e0579e59ad773-Paper-Datasets_and_Benchmarks_Track.pdf"
        },
        {
            "type": "paper",
            "url": "https://papers.nips.cc/paper/2024/file/d9d40ea135f064d9e49e0579e59ad773-Paper-Datasets_and_Benchmarks_Track.pdf"
        },
        {
            "type": "project_page",
            "url": "https://eye-tracking-for-physiological-sensing.github.io/eyegraph/"
        },
        {
            "type": "github_page",
            "url": "https://github.com/eye-tracking-for-physiological-sensing/eyegraph"
        }
    ],
    "full_name": "",
    "additional_metadata": {
        "num_subjects": "40",
        "num_male": "28",
        "num_female": "12",
        "stereo": true
    },
    "bibtex": {
        "series": "NIPS '24",
        "location": "Vancouver, BC, Canada",
        "numpages": "15",
        "articleno": "3825",
        "booktitle": "Proceedings of the 38th International Conference on Neural Information Processing Systems",
        "address": "Red Hook, NY, USA",
        "publisher": "Curran Associates Inc.",
        "isbn": "9798331314385",
        "year": 2025,
        "title": "EyeGraph: modularity-aware spatio temporal graph clustering for continuous event-based eye tracking",
        "author": "Bandara, Nuwan and Kandappu, Thivya and Sen, Argha and Gokarn, Ila and Misra, Archan",
        "type": "inproceedings",
        "key": "10.5555/3737916.3741741"
    }
}
---

### Dataset Structure

- Contains data from 40 (28 male and 12 female)

### Comparison Table

| **Feature**    | **Tracking End Goal** | **Representation** | **Learning** | **Grayscale / RGB data** | **Is data from human participants?** | **Is Monocular?** | **Is Multi-modal?** | **Number of participants** | **Is head-movement allowed?** | **Accounts lighting changes?** | **Accounts participant** |
| -------------- | --------------------- | ------------------ | ------------ | ------------------------ | ------------------------------------ | ----------------- | ------------------- | -------------------------- | ----------------------------- | ------------------------------ | ------------------------ |
| \[[EBVEYE]\]   | Gaze                  | 2D frame           | supervised   | Y                        | Y                                    | N                 | Y                   | 24                         | N                             | N                              | N                        |
| \[[Ev-Eye]\]   | Gaze                  | 2D frame           | supervised   | Y                        | Y                                    | N                 | Y                   | 48                         | N                             | N                              | N                        |
| \[[3ET]\]      | Pupil                 | 2D frame           | supervised   | N                        | N                                    | N/A               | N                   | N/A                        | N/A                           | N                              | N/A                      |
| \[[3ET+]\]     | Pupil                 | 2D frame           | supervised   | N                        | Y                                    | Y                 | N                   | 13                         | N                             | N                              | N                        |
| \[[EyeGraph]\] | Pupil                 | Graph              | unsupervised | Y                        | Y                                    | Y                 | Y                   | 40                         | Y                             | Y                              | Y                        |

^8c93ba
