import prisma from '../db.js';

/**
 * Get all projects for the organization
 */
export const getProjects = async (req, res) => {
  try {
    const projects = await prisma.project.findMany({
      where: { orgId: req.orgId },
      include: {
        _count: {
          select: { tasks: true }
        }
      },
      orderBy: { updatedAt: 'desc' }
    });

    res.json({
      success: true,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch projects'
    });
  }
};

/**
 * Get tasks for a specific project
 */
export const getProjectTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const tasks = await prisma.task.findMany({
      where: { 
        projectId: id,
        orgId: req.orgId 
      },
      include: {
        assignee: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    });

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch tasks'
    });
  }
};

/**
 * Update task status (for Kanban)
 */
export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const task = await prisma.task.update({
      where: { 
        id,
        orgId: req.orgId 
      },
      data: { status }
    });

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    console.error('Error updating task status:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update task'
    });
  }
};
